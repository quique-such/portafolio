# Portafolio — Enrique Such Andreu

[![Web](https://img.shields.io/badge/web-quique--such.github.io%2Fportafolio-20c65a?style=flat-square)](https://quique-such.github.io/portafolio/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/quique-such/portafolio/deploy.yml?branch=main&label=deploy&style=flat-square)](https://github.com/quique-such/portafolio/actions/workflows/deploy.yml)

Sitio de portafolio personal, estático y bilingüe (ES/EN): proyectos, experiencia y CV descargable.

**Web publicada:** https://quique-such.github.io/portafolio/

## Stack

[![Stack](https://skillicons.dev/icons?i=astro,tailwind,ts,githubactions)](https://skillicons.dev)

- [Astro 4](https://astro.build/) — generador de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com/) — estilos utilitarios
- TypeScript (solo type-checking)

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo en localhost:4321/portafolio
npm run build    # Compilar a dist/
npm run preview  # Preview del build local
```

## Estructura

```
src/
├── components/   # Secciones: Hero, Projects, About, Skills, Experience, Contact
├── layouts/      # Base.astro — HTML base, navbar, lógica JS (i18n, scroll)
├── pages/        # index.astro ensambla las secciones; i18n/[lang].json.ts sirve las traducciones
├── i18n/         # Textos: es.json (base) y en.json
└── styles/       # global.css — variables de color y fuentes
public/
├── img/          # Foto de perfil e imágenes de proyectos
└── Enrique-Such-Andreu-CV.pdf
```

## Contenido e i18n

Todos los textos viven en `src/i18n/es.json` y `src/i18n/en.json`; para cambiar un proyecto, una skill o la experiencia basta con editar esos dos ficheros.

El toggle ES/EN de la navbar carga `/i18n/<lang>.json` en cliente y despacha un `CustomEvent('langchange')` en `window`. Los textos estáticos usan el atributo `data-i18n="key.path"`; los dinámicos escuchan el evento. El idioma se guarda en `localStorage`.

## Deploy

Cada push a `main` compila el sitio y lo publica en GitHub Pages con el workflow `.github/workflows/deploy.yml`.
