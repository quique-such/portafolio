# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio personal de Enrique Such Andreu — sitio estático bilingüe (ES/EN) construido con **Astro 4 + Tailwind CSS + AOS**. Spec de diseño en `docs/superpowers/specs/2026-04-13-portfolio-design.md`.

## Commands

```bash
npm run dev      # Astro dev server (localhost:4321)
npm run build    # Compilar estático a dist/
npm run preview  # Preview del build local
```

No hay linter ni tests configurados. TypeScript solo para type-checking.

## Arquitectura

Single page: `src/pages/index.astro` ensambla los componentes sección a sección. `src/layouts/Base.astro` envuelve todo con el HTML base, la navbar sticky y toda la lógica JS (AOS, i18n, scroll, menú móvil).

Secciones en orden de aparición: `Hero → Projects → About → Skills → Experience → Contact`, cada una en `src/components/`. IDs de ancla: `#hero`, `#projects`, `#about`, `#skills`, `#experience`, `#contact`.

## i18n

- Textos en `src/i18n/es.json` (base) y `src/i18n/en.json`. En build se copian a `dist/i18n/` y se sirven en `/i18n/<lang>.json`.
- El toggle ES/EN en la navbar hace `fetch('/i18n/<lang>.json')` en cliente y despacha un `CustomEvent('langchange', { detail: { lang, translations } })` en `window`.
- Elementos estáticos: atributo `data-i18n="key.path"` → `Base.astro` escribe el `textContent` automáticamente.
- Contenido dinámico/JS (e.g. typewriter en Hero): escucha `window.addEventListener('langchange', ...)` y lee `e.detail.translations`.
- Idioma persistido en `localStorage` bajo la clave `'lang'`.

## Stack y configuración

- **Astro** — `astro.config.mjs`, devToolbar desactivado
- **Tailwind CSS** — tokens de color y tipografía en `tailwind.config.mjs`; las mismas variables en `src/styles/global.css`
- **AOS** — inicializado una sola vez en `Base.astro` (`duration: 700, once: true, offset: 80`); usar atributos `data-aos`, `data-aos-delay`, `data-aos-duration` en los elementos
- **Fuentes** — `font-sans` = Inter, `font-mono` = JetBrains Mono (Google Fonts, importadas en `global.css`)
- **Netlify** — deploy automático desde `main`

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

## Pendientes (Enrique debe aportar)

- Foto de perfil → `public/img/`
- Capturas/imágenes de proyectos → `public/img/`
- Textos en inglés (`src/i18n/en.json`) — completar al final del desarrollo
