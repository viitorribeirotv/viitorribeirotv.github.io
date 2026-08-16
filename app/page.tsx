const featuredChannels = [
  {
    number: "01",
    title: "YouTube",
    description: "Gameplays, análises, primeiras impressões e vídeos para assistir no seu ritmo.",
    detail: "Vídeos & reviews",
    href: "https://youtube.com/@viitorribeirotv?sub_confirmation=1",
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
  {
    number: "04",
    title: "Instagram",
    description: "Bastidores, novidades e momentos do dia a dia para acompanhar de perto.",
    detail: "Bastidores & novidades",
    href: "https://www.instagram.com/viitorribeirotv",
    className: "instagram",
  },
];

const allLinks = [
  { short: "YT", label: "YouTube", detail: "Vídeos e reviews", href: "https://youtube.com/@viitorribeirotv?sub_confirmation=1" },
  { short: "TW", label: "Twitch", detail: "Lives e comunidade", href: "https://www.twitch.tv/viitorribeirotv" },
  { short: "K", label: "Kick", detail: "Transmissões ao vivo", href: "https://kick.com/viitorribeirotv" },
  { short: "IG", label: "Instagram", detail: "Bastidores e novidades", href: "https://www.instagram.com/viitorribeirotv" },
  { short: "DS", label: "Discord", detail: "Entre para a comunidade", href: "https://discord.gg/xHYPKqxTTW" },
  { short: "LP", label: "Apoie a live", detail: "Contribua pelo LivePix", href: "https://livepix.gg/viitorribeirotv" },
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
            <a href="#parcerias">Parcerias</a>
          </nav>
          <a className="header-cta" href="#links">
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
            <a className="primary-action" href="https://youtube.com/@viitorribeirotv?sub_confirmation=1" target="_blank" rel="noreferrer">
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
                Tenho 32 anos e acompanho a evolução dos games desde a era dos pixels e dos consoles clássicos até a experiência atual no PC e no PS5. Em meio à rotina, encontrei nos jogos um espaço para relaxar, explorar novas histórias e compartilhar experiências — e foi dessa paixão que nasceu este canal.
              </p>
              <p>
                Produzo gameplays de diferentes gêneros, reviews sinceras e análises com opinião própria, passando por grandes lançamentos, jogos de terror e clássicos da nostalgia retrô. Também converso sobre hardware e cultura gamer, sempre buscando criar um ponto de encontro para quem valoriza boas discussões, humor e uma comunidade próxima.
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

      <section className="link-section section-shell">
        <div className="link-intro">
          <div className="section-label"><span>03</span> Conecte-se</div>
          <p className="kicker">Todos os meus canais</p>
          <h2>Onde tem jogo,<br />eu estou por lá.</h2>
          <p className="link-copy">Siga, participe e escolha o seu lugar favorito para acompanhar o conteúdo.</p>
        </div>
        <div className="link-list" id="links">
          {allLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span className="social-mark">{link.short}</span>
              <span className="link-name"><strong>{link.label}</strong><small>{link.detail}</small></span>
              <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="business-section section-shell" id="parcerias">
        <div className="business-intro">
          <div className="section-label"><span>04</span> Parcerias e trabalhos</div>
          <p className="kicker">Vamos conversar?</p>
          <h2>Seu projeto pode ganhar uma nova fase.</h2>
        </div>
        <div className="business-card">
          <p>
            Estou aberto a parcerias, campanhas, publis, criação de conteúdo e projetos ligados a games e tecnologia.
          </p>
          <a className="business-email" href="mailto:vitor.a.trevisani@gmail.com?subject=Parceria%20profissional%20-%20viitorribeirotv">
            <span className="business-email-label">Contato profissional</span>
            <strong>vitor.a.trevisani@gmail.com</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <footer>
        <div className="footer-glow" aria-hidden="true" />
        <div className="section-shell footer-inner">
          <p className="footer-title">A próxima partida<br />começa agora<span>.</span></p>
          <a className="primary-action" href="#links">
            Ver canais <span aria-hidden="true">↘</span>
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
