import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://viitorribeirotv.github.io/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza o site pessoal completo", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>viitorribeirotv \| Gameplay, Reviews e Lives<\/title>/i);
  assert.match(html, /Jogar é só/);
  assert.match(html, /Prazer, eu sou o Vitor/);
  assert.match(html, /Conteúdo para cada momento/);
  assert.match(html, /https:\/\/youtube\.com\/@viitorribeirotv\?sub_confirmation=1/);
  assert.match(html, /https:\/\/discord\.gg\/xHYPKqxTTW/);
  assert.match(html, /https:\/\/livepix\.gg\/viitorribeirotv/);
  assert.match(html, /Apoie a live/);
  assert.doesNotMatch(html, /https:\/\/github\.com\/viitorribeirotv/);
  assert.match(html, /https:\/\/viitorribeirotv\.github\.io\/og\.png/);
  assert.match(html, /href="\/favicon\.ico"/);
  assert.match(html, /href="\/favicon\.png"/);
  assert.match(html, /href="\/apple-touch-icon\.png"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});
