const featuredChannels = [
  {
    number: "01",
    title: "YouTube",
    description: "Gameplays, análises, primeiras impressões e vídeos para assistir no seu ritmo.",
    detail: "Vídeos & reviews",
    href: "https://www.youtube.com/@viitorribeirotv",
    className: "youtube",
  },
  {
    number: "02",
    title: "Twitch",
    description: "Lives para acompanhar cada partida, trocar ideia no chat e fazer parte da comunidade.",
    detail: "Lives & comunidade",
    href: "https://www.twitch.tv/viitorribeirotv",
    className: "twitch",
  },
  {
    number: "03",
    title: "Kick",
    description: "Mais um ponto de encontro ao vivo para gameplay, conversa e muita resenha gamer.",
    detail: "Ao vivo & sem cortes",
    href: "https://kick.com/viitorribeirotv",
    className: "kick",
  },
];

const allLinks = [
  { short: "YT", label: "YouTube", detail: "Vídeos e reviews", href: "https://www.youtube.com/@viitorribeirotv" },
  { short: "TW", label: "Twitch", detail: "Lives e comunidade", href: "https://www.twitch.tv/viitorribeirotv" },
  { short: "K", label: "Kick", detail: "Transmissões ao vivo", href: "https://kick.com/viitorribeirotv" },
  { short: "IG", label: "Instagram", detail: "Bastidores e novidades", href: "https://www.instagram.com/viitorribeirotv" },
  { short: "TT", label: "TikTok", detail: "Cortes e momentos", href: "https://www.tiktok.com/@viitorribeirotv" },
  { short: "DS", label: "Discord", detail: "Entre para a comunidade", href: "https://discord.gg/xHYPKqxTTW" },
  { short: "GH", label: "GitHub", detail: "Projetos e código", href: "https://github.com/viitorribeirotv" },
  { short: "LT", label: "Linktree", detail: "Todos os caminhos", href: "https://linktr.ee/viitorribeirotv" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-backdrop" aria-hidden="true" />
        <header className="site-header">
          <a className="wordmark" href="#inicio" aria-label="viitorribeirotv — início">
            <span>viitorribeiro</span><strong>tv</strong>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#conteudo">Conteúdo</a>
            <a href="#links">Links</a>
          </nav>
          <a className="header-cta" href="https://linktr.ee/viitorribeirotv" target="_blank" rel="noreferrer">
            Todos os links <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-content">
          <p className="eyebrow"><span /> Criador de conteúdo gamer</p>
          <h1>
            <span>Jogar é só</span>
            <span>o começo.</span>
          </h1>
          <p className="hero-copy">
            Gameplay, reviews e lives com opinião de verdade — um espaço para quem vive games dentro e fora da tela.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="https://www.youtube.com/@viitorribeirotv" target="_blank" rel="noreferrer">
              Assistir no YouTube <span aria-hidden="true">↗</span>
            </a>
            <a className="text-action" href="#sobre">Conheça o Vitor <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-rail" aria-label="Tipos de conteúdo">
          <span>Gameplay</span><i />
          <span>Reviews</span><i />
          <span>Lives</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>GAMEPLAY</span><b>✦</b><span>REVIEWS</span><b>✦</b><span>LIVES</span><b>✦</b><span>GAMES</span><b>✦</b><span>COMUNIDADE</span>
        </div>
      </div>

      <section className="about section-shell" id="sobre">
        <div className="section-label"><span>01</span> Sobre mim</div>
        <div className="about-grid">
          <div className="portrait-wrap">
            <div className="portrait-glow" aria-hidden="true" />
            {/* A imagem permanece nativa para funcionar sem otimizador de servidor no GitHub Pages. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/avatar-viitor.png" alt="Retrato ilustrado de Vitor Ribeiro" width="1024" height="1024" />
            <div className="portrait-tag"><span>●</span> Online no universo gamer</div>
          </div>
          <div className="about-copy">
            <p className="kicker">Prazer, eu sou o Vitor.</p>
            <h2>Games são histórias que a gente vive junto.</h2>
            <div className="copy-columns">
              <p>
                Crio conteúdo para quem gosta de descobrir jogos, acompanhar cada partida e conversar sem roteiro engessado.
              </p>
              <p>
                Entre gameplays, reviews e transmissões ao vivo, compartilho experiências honestas e construo uma comunidade que joga junto.
              </p>
            </div>
            <div className="signature">viitorribeiro<span>tv</span></div>
          </div>
        </div>
      </section>

      <section className="content-section" id="conteudo">
        <div className="section-shell">
          <div className="section-heading">
            <div className="section-label"><span>02</span> Onde me encontrar</div>
            <div>
              <p className="kicker">Escolha sua plataforma</p>
              <h2>Conteúdo para cada momento.</h2>
            </div>
          </div>

          <div className="channel-grid">
            {featuredChannels.map((channel) => (
              <a className={`channel-card ${channel.className}`} key={channel.title} href={channel.href} target="_blank" rel="noreferrer">
                <div className="card-top"><span>{channel.number}</span><span aria-hidden="true">↗</span></div>
                <div className="platform-mark">{channel.title.slice(0, 2).toUpperCase()}</div>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <div className="card-detail"><i /> {channel.detail}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="link-section section-shell" id="links">
        <div className="link-intro">
          <div className="section-label"><span>03</span> Conecte-se</div>
          <p className="kicker">Todos os meus canais</p>
          <h2>Onde tem jogo,<br />eu estou por lá.</h2>
          <p className="link-copy">Siga, participe e escolha o seu lugar favorito para acompanhar o conteúdo.</p>
        </div>
        <div className="link-list">
          {allLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span className="social-mark">{link.short}</span>
              <span className="link-name"><strong>{link.label}</strong><small>{link.detail}</small></span>
              <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-glow" aria-hidden="true" />
        <div className="section-shell footer-inner">
          <p className="footer-title">A próxima partida<br />começa agora<span>.</span></p>
          <a className="primary-action" href="https://linktr.ee/viitorribeirotv" target="_blank" rel="noreferrer">
            Vamos nessa <span aria-hidden="true">↗</span>
          </a>
          <div className="footer-bottom">
            <a className="wordmark" href="#inicio"><span>viitorribeiro</span><strong>tv</strong></a>
            <p>Gameplay • Reviews • Lives</p>
            <p>© 2026 Vitor Ribeiro</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
