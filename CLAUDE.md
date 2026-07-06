# CLAUDE.md

Guía para trabajar en este proyecto.

## Qué es

Landing page estática de **Artefact** para el sector aerolíneas ("Data & AI para Aerolíneas"). Es una página de una sola columna, en **español**, orientada a mostrar casos de uso de IA en la cadena de valor y el back office, más credenciales de éxito.

## Stack y arquitectura

- **Un único archivo:** todo el sitio vive en [index.html](index.html) — HTML, CSS (dentro de `<style>` en el `<head>`) y JavaScript (en `<script>` al final del `<body>`). No hay bundler, framework ni dependencias externas. Es HTML/CSS/JS vanilla.
- **Sin build step.** Se abre directamente en el navegador; se despliega tal cual (hay `.nojekyll`, indicando **GitHub Pages**).
- **Assets:** imágenes en [images/](images/) y animaciones en [gifs/](gifs/). Se referencian por ruta relativa (p. ej. `images/portada.png`, `gifs/cdv1.gif`). No usar base64 embebido para assets nuevos; mantener archivos en sus carpetas.

## Estructura de `index.html`

1. `<style>` en el `<head>` — todo el CSS, con variables de diseño en `:root`.
2. `<main id="top">` con las secciones: `hero`, `#pov-artefact`, `#casos`, `#credenciales`, `#artefact`.
3. Tres bloques `<script>` al final:
   - Configura la imagen de portada del hero.
   - Define `valueStages` (datos de casos de uso) y renderiza el mapa interactivo de cadena de valor (`#route-map`, `#stage-spotlight`).
   - Lógica de pestañas de credenciales (`switchTab`).

## Convenciones de diseño

- **Colores:** usar siempre las variables CSS de `:root` (`--navy-950`, `--magenta`, `--cyan`, etc.). No introducir hex sueltos; extender las variables si hace falta un color nuevo.
- **Tipografía:** `Roboto, Arial, sans-serif`.
- **Marca:** color de acento magenta `#ff0066`. Respetar el look sobrio navy + acentos.
- **Idioma:** todo el contenido de cara al usuario en español. Mantener consistencia terminológica (aviación/aerolíneas).
- **Accesibilidad:** las secciones usan `aria-labelledby`, roles `tab`/`tabpanel` y `aria-live`. Preservar estos atributos al editar y añadirlos en componentes nuevos.

## Cómo trabajar

- Para editar contenido de casos de uso, modificar el array `valueStages` en el `<script>` correspondiente, no el HTML generado dinámicamente.
- Para cambios de estilo, editar el bloque `<style>` reutilizando las clases y variables existentes.
- Mantener el sitio como **un solo archivo** salvo indicación contraria; no fragmentar en CSS/JS externos sin acordarlo.
- Verificar visualmente abriendo `index.html` en el navegador tras cada cambio; no hay tests automatizados.

## Git / despliegue

- Rama principal: `main`.
- `.gitignore` solo excluye `.DS_Store`.
- Commit y push solo cuando el usuario lo pida.
