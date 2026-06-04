# Portfolio Personal — Enrique Such Andreu
**Fecha:** 2026-04-13  
**Estado:** Aprobado por el usuario

---

## Contexto

Enrique necesita un portfolio personal online que recopile sus proyectos universitarios y habilidades, con vistas a usarlo en búsquedas de trabajo actuales y futuras. El objetivo es tener todo en un único sitio bien presentado que transmita su perfil creativo-técnico y pueda actualizarse a lo largo del tiempo.

---

## Decisiones de diseño

| Decisión | Elección |
|---|---|
| Idioma | Bilingüe: español (base) + inglés (toggle ES/EN) |
| Estilo visual | Dark (fondo negro) + acento verde (#22c55e) |
| Tech stack | Astro + Tailwind CSS + AOS (Animate On Scroll) |
| Efectos | Typewriter en hero, blobs animados, partículas, fade-in/stagger al scroll |
| Navbar logo | "Enrique Such Andreu" (sin siglas) |
| Hosting | Netlify (gratuito, compatible con Astro) |

---

## Secciones y contenido

### 01 · Hero
- **Fondo:** oscuro (#0d0d0d) con 3 blobs verdes difusos animados (CSS keyframes) y partículas flotantes (canvas o divs absolutos)
- **Navbar sticky:** "Enrique Such Andreu" (verde) a la izquierda | links de sección + toggle `ES / EN` a la derecha
- **Contenido:**
  - Etiqueta monospace: `// Hola, soy`
  - Nombre grande: **Enrique Such Andreu** (fuente bold, blanca)
  - Typewriter rotando entre: "Tecnología Digital & Multimedia" · "Inteligencia Artificial" · "Diseño 2D/3D & Animación" · "Proyectos Interactivos"
  - Bio: *"Perfil creativo–técnico. Grado en Tecnología Digital y Multimedia (UPV) + Máster en IA (Universidad de Bolonia, Erasmus). Me apasiona la intersección entre tecnología, creatividad y experiencia de usuario."*
  - CTAs: botón primario verde "Ver proyectos" + botón secundario outline "Contacto"
  - Indicador de scroll (línea verde + texto "SCROLL")

### 02 · Sobre mí
- Foto de perfil (circular, borde verde sutil)
- Bio extendida (de la descripción del PDF)
- Educación integrada como tags verdes:
  - 🎓 Tecnología Digital y Multimedia — UPV
  - 🤖 Máster en Inteligencia Artificial — Universidad de Bolonia (Erasmus)
- Idiomas: Español (Nativo) · Valenciano (C1) · Inglés (B2) · Italiano (Básico)
- **Animación:** AOS fade-in al llegar con scroll

### 03 · Proyectos destacados
Grid responsive de tarjetas (3 columnas desktop, 2 tablet, 1 móvil).

**Cada tarjeta contiene:** emoji/imagen del proyecto, nombre, descripción corta, tags de tecnología. Hover: borde verde + elevación (translateY -4px). AOS stagger (aparecen una a una).

**Proyectos (9) — datos del PDF:**

| # | Nombre | Tecnologías | Descripción corta |
|---|---|---|---|
| 1 | Detección de señales de tráfico | Python, YOLOv8, OpenCV | Visión artificial en tiempo real para clasificación de señales en conducción autónoma simulada |
| 2 | Reconocimiento facial | Python, Deep Learning | Scripts de procesado digital de imagen y validación de identidad |
| 3 | Proyecto multidisciplinar — Altura de salto | Python, Matplotlib, Pandas | Aplicación para calcular altura de salto con BBDD de usuarios y rankings comparativos |
| 4 | Gestión de empresa tecnológica | Microsoft Project | Simulación integral de ERP, diagramas de Gantt y control de costes |
| 5 | EcoClothes — Desarrollo web | HTML5, CSS, JavaScript, Git | Diseño y despliegue de plataforma e-commerce funcional |
| 6 | Electrónica embebida | Arduino IDE, C++, M5Stack FIRE | Diseño de circuitos y programación lógica para dispositivos portátiles inteligentes |
| 7 | Juegos controlados por voz | Java, C#, Audio DSP | Suite de 4 minijuegos que responden a tono, volumen y frecuencia. UI accesible |
| 8 | Animación 3D — Cowboys | Blender, GIMP | Personajes 3D texturizados, escenas completas y modelado desde cero |
| 9 | Realidad Virtual con Unity | Unity 3D, C# | Prototipos de VR con mecánicas de movimiento e integración de assets 3D |

### 04 · Habilidades y herramientas
Tres columnas con pills (hover verde):

- **// LENGUAJES:** Python · JavaScript · HTML/CSS · Java · C++ · SQL · C#
- **// HERRAMIENTAS CREATIVAS:** Blender · GIMP · Unity 3D · OBS Studio · OpenSCAD
- **// HERRAMIENTAS TÉCNICAS:** Git/GitHub · Arduino · VS Code · Microsoft Project · YOLOv8 · OpenCV

**Animación:** AOS fade-in por columna

### 05 · Experiencia & Actividades
Timeline vertical con línea y punto verdes.

| Entrada | Rol | Periodo | Descripción |
|---|---|---|---|
| Grupo Generación Espontánea – Toma Uno | Miembro activo | UPV · 2022–presente | Trabajo en equipo multidisciplinar en proyectos creativos y tecnológicos. Organización de eventos creativos en el entorno universitario |

*(Sección diseñada para escalar: prácticas, trabajos o proyectos futuros entran aquí)*

**Animación:** AOS slide-in desde la izquierda

### 06 · Contacto
- Frase de cierre: *"¿Tienes un proyecto en mente o quieres ponerte en contacto? Escríbeme."*
- Links clicables:
  - ✉️ Email
  - 💼 LinkedIn: linkedin.com/in/enrique-such-andreu
  - 🐙 GitHub (pendiente de añadir URL)
- Fondo con blob verde difuso para cerrar con energía visual
- **Animación:** AOS fade-in

---

## Arquitectura técnica

```
portafolio/
├── src/
│   ├── layouts/
│   │   └── Base.astro          # HTML base, nav, footer, i18n context
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Skills.astro
│   │   ├── Experience.astro
│   │   └── Contact.astro
│   ├── i18n/
│   │   ├── es.json             # Textos en español (base)
│   │   └── en.json             # Textos en inglés
│   ├── pages/
│   │   └── index.astro         # Single page, todas las secciones
│   └── styles/
│       └── global.css          # Variables CSS, fuentes, reset
├── public/
│   └── img/                    # Foto de perfil, capturas de proyectos
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

### Bilingüismo (i18n)
- Un único fichero `index.astro` con todos los componentes
- Ficheros `es.json` / `en.json` con todas las cadenas de texto
- Toggle `ES / EN` en la navbar que cambia el idioma en cliente (sin recargar la página, usando `localStorage` para persistir la preferencia)
- Los datos de proyectos y habilidades se definen una sola vez; solo los textos descriptivos se traducen

### Animaciones
- **AOS** para scroll animations (fade-in, stagger, slide-in)
- **CSS keyframes** para blobs y partículas del hero
- **Typewriter** implementado en Vanilla JS (~30 líneas)
- Sin WebGL ni librerías pesadas

### Paleta de colores
```
--color-bg:        #0d0d0d
--color-surface:   #141414
--color-surface-2: #1a1a1a
--color-border:    #252525
--color-accent:    #22c55e   /* verde principal */
--color-accent-2:  #16a34a   /* verde oscuro */
--color-accent-3:  #4ade80   /* verde claro */
--color-text:      #e5e5e5
--color-muted:     #666666
```

---

## Hosting y despliegue
- **Netlify** (igual que el ejemplo de referencia)
- Deploy automático desde GitHub: push a `main` → build → live
- Dominio gratuito de Netlify o dominio propio en el futuro

---

## Pendientes (a rellenar por Enrique antes o durante el desarrollo)
- [ ] Foto de perfil (para sección Sobre mí y hero)
- [ ] Email de contacto
- [ ] URL de GitHub
- [ ] Capturas/imágenes de los proyectos (del PDF se extraen algunas; hay más en los proyectos originales)
- [ ] Textos en inglés (en.json) — se pueden completar al final

---

## Verificación (cómo probar que funciona)
1. `npm run dev` — arranca Astro en localhost
2. Abrir en navegador y comprobar cada sección en escritorio y móvil
3. Probar toggle ES/EN — todos los textos deben cambiar sin recargar
4. Comprobar animaciones AOS al hacer scroll por cada sección
5. Verificar hover en tarjetas de proyectos y pills de habilidades
6. `npm run build` — debe compilar sin errores
7. Deploy en Netlify y verificar URL pública
