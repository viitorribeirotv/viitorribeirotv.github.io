# viitorribeirotv

Site pessoal de Vitor Ribeiro, criador de conteúdo gamer.

Gameplay, reviews, lives e todos os canais oficiais em uma experiência visual única, responsiva e acessível.

## Endereço

[viitorribeirotv.github.io](https://viitorribeirotv.github.io)

## Desenvolvimento

```bash
npm install
npm run dev
```

O site é publicado automaticamente no GitHub Pages a cada atualização da branch `main`.

## Identidade visual

O site segue os banners do canal: grafite, azul escuro e ciano, com o cavalo no
fundo e a foto original de Vitor em uma camada separada. As fotos são WebP sem
perda, sem filtros de cor. O avatar e a imagem de compartilhamento
também usam a fotografia atual. O favicon e o ícone para celular usam o “tv”
ciano da marca sobre fundo grafite, para leitura em tamanhos pequenos.
O layout inclui navegação no celular e a
frequência de vídeos, lives e Shorts.

Os arquivos atuais estão em `public/images/vitor-pro-player.webp`,
`public/images/avatar-vitor-natural.webp` e `public/images/hero-pro-player.webp`.
O fundo foi preparado com a ferramenta built-in image_gen a partir do wallpaper;
o retrato não foi gerado nem retocado. O prompt usado foi:

> Edit this background plate for a website hero. Remove ONLY the entire viitorribeirotv wordmark and reconstruct seamless matching dark graphite/navy metal texture in its former area. There must be NO text anywhere, NO person, NO social icons, NO schedule. Keep the exact horse-head shield emblem at far upper-right, all diagonal graphite metallic planes, understated crisp cyan lines, soft mist and integrated continuous gaming background. Keep 16:9 and same visual identity. Preserve dark empty left half for accessible HTML heading and buttons and right-center negative space for a real portrait layer later. No collage seams, no new design elements.

## Métricas do Google Analytics

O site suporta o Google Analytics 4 sem alterar a interface pública. Para ativar,
crie uma propriedade GA4 para `https://viitorribeirotv.github.io` e adicione o
identificador de medição (formato `G-XXXXXXXXXX`) como a variável de repositório
`GA_MEASUREMENT_ID` em **Settings → Secrets and variables → Actions → Variables**.

Depois da próxima publicação, o Analytics registrará acessos e cliques nos canais,
identificando a plataforma e a área do site em que o link foi acionado.
