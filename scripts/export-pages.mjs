import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import process from "node:process";

const cli = "node_modules/vinext/dist/cli.js";
const env = { ...process.env, WRANGLER_LOG_PATH: ".wrangler/wrangler.log" };

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { env, stdio: "inherit", shell: false });
    child.once("error", reject);
    child.once("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

async function waitForPage(url, attempts = 40) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw lastError ?? new Error("The production preview did not start.");
}

await run(process.execPath, [cli, "build"]);

const server = spawn(process.execPath, [cli, "start"], {
  env: { ...env, PORT: "4173" },
  stdio: ["ignore", "pipe", "pipe"],
  shell: false,
});

server.stdout.on("data", (chunk) => process.stdout.write(chunk));
server.stderr.on("data", (chunk) => process.stderr.write(chunk));

try {
  const response = await waitForPage("http://127.0.0.1:4173/");
  const html = await response.text();
  if (!html.includes("Jogar é só") || !html.includes("viitorribeirotv")) {
    throw new Error("The exported page is missing its expected content.");
  }
  await mkdir("dist/client", { recursive: true });
  await writeFile("dist/client/index.html", html, "utf8");
  await writeFile("dist/client/.nojekyll", "", "utf8");
  console.log("\nGitHub Pages export written to dist/client/index.html");
} finally {
  server.kill();
}
