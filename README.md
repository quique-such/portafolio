# Portafolio — Enrique Such Andreu

Sitio de portafolio personal, estático y bilingüe (ES/EN), construido con **Astro 4**, **Tailwind CSS** y **AOS**.

## Stack

- [Astro 4](https://astro.build/) — generador de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com/) — estilos utilitarios
- [AOS](https://michalsnik.github.io/aos/) — animaciones al hacer scroll
- TypeScript (solo type-checking)

## Comandos

```bash
npm run dev      # Servidor de desarrollo en localhost:4321
npm run build    # Compilar a dist/
npm run preview  # Preview del build local
```

## Estructura

```
src/
├── components/   # Secciones: Hero, Projects, About, Skills, Experience, Contact
├── layouts/      # Base.astro — HTML base, navbar, lógica JS (AOS, i18n, scroll)
├── pages/        # index.astro — ensambla todas las secciones
├── i18n/         # Traducciones es.json / en.json
└── styles/       # global.css — variables de color y fuentes
public/
├── i18n/         # Traducciones servidas en cliente
└── img/          # Imágenes y foto de perfil
```

## i18n

El toggle ES/EN en la navbar carga `/i18n/<lang>.json` en cliente y despacha un `CustomEvent('langchange')` en `window`. Los textos estáticos usan el atributo `data-i18n="key.path"`; los dinámicos escuchan el evento. El idioma se persiste en `localStorage`.

## Deploy

Deploy automático en [Netlify](https://www.netlify.com/) desde la rama `main`.
