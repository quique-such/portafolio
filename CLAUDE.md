# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio personal de Enrique Such Andreu — sitio estático bilingüe (ES/EN) construido con **Astro 4 + Tailwind CSS**. Spec de diseño en `docs/superpowers/specs/2026-04-13-portfolio-design.md`.

## Commands

```bash
npm run dev      # Astro dev server (localhost:4321)
npm run build    # Compilar estático a dist/
npm run preview  # Preview del build local
```

No hay linter ni tests configurados. TypeScript solo para type-checking.

## Arquitectura

Single page: `src/pages/index.astro` ensambla los componentes sección a sección. `src/layouts/Base.astro` envuelve todo con el HTML base, la navbar sticky y toda la lógica JS (i18n, scroll, animaciones de entrada, menú móvil).

Secciones en orden de aparición: `Hero → Projects → About → Skills → Experience → Contact`, cada una en `src/components/`. IDs de ancla: `#hero`, `#projects`, `#about`, `#skills`, `#experience`, `#contact`.

## i18n

- Textos en `src/i18n/es.json` (base) y `src/i18n/en.json`. `src/pages/i18n/[lang].json.ts` los sirve en `/i18n/<lang>.json`; no hay copia en `public/`.
- El contenido (bio, proyectos, formación, idiomas, skills, experiencia) se renderiza desde `es.json`. Los títulos de sección, botones y navbar siguen escritos en los componentes y se traducen con `data-i18n`: si cambias uno, cámbialo también en `es.json`.
- El toggle ES/EN en la navbar hace `fetch('/i18n/<lang>.json')` en cliente y despacha un `CustomEvent('langchange', { detail: { lang, translations } })` en `window`.
- Elementos estáticos: atributo `data-i18n="key.path"` → `Base.astro` escribe el `textContent` automáticamente. Admite índices de array (`about.education.0.title`).
- Contenido dinámico/JS (e.g. typewriter en Hero): escucha `window.addEventListener('langchange', ...)` y lee `e.detail.translations`.
- Idioma persistido en `localStorage` bajo la clave `'lang'`.

## Stack y configuración

- **Astro** — `astro.config.mjs`, devToolbar desactivado
- **Tailwind CSS** — tokens de color y tipografía en `tailwind.config.mjs`; las mismas variables en `src/styles/global.css`
- **Animaciones** — clase `.reveal` (y `.reveal-delay-1…4`); un `IntersectionObserver` en `Base.astro` añade `.visible` al entrar en pantalla
- **Fuentes** — `font-sans` = Inter, `font-mono` = JetBrains Mono (Google Fonts, importadas en `global.css`)
- **GitHub Pages** — cada push a `main` publica con `.github/workflows/deploy.yml` en https://quique-such.github.io/portafolio/ (`base: '/portafolio'` en `astro.config.mjs`)

## Paleta de colores (tokens Tailwind y variables CSS)

| Token Tailwind | Variable CSS         | Valor     |
|----------------|----------------------|-----------|
| `bg`           | `--color-bg`         | `#0d0d0d` |
| `surface`      | `--color-surface`    | `#141414` |
| `surface2`     | `--color-surface-2`  | `#1a1a1a` |
| `border`       | `--color-border`     | `#252525` |
| `accent`       | `--color-accent`     | `#22c55e` |
| `accent2`      | `--color-accent-2`   | `#16a34a` |
| `accent3`      | `--color-accent-3`   | `#4ade80` |
| `text`         | `--color-text`       | `#e5e5e5` |
| `muted`        | `--color-muted`      | `#666666` |

## Contenido

- Los textos siguen el CV: sin cifras exactas, frases cortas y productos internos de Rankia descritos de forma genérica.
- `public/Enrique-Such-Andreu-CV.pdf` es el CV que se descarga desde el Hero; se exporta del diseño de Canva.
