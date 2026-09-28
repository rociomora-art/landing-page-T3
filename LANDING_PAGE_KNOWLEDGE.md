# ESTRUCTURA Y ARQUITECTURA DEL LANDING PAGE T3

## 1. Resumen Ejecutivo del Sitio

- **Propósito:** Landing page comercial de Artefact dirigida al sector **Aerolíneas** ("Data & AI para Aerolíneas"). No está segmentada por Pasajeros/Carga/Agentic como frentes de negocio separados con toggle de usuario; es una sola narrativa de una aerolínea de red que cubre: (1) tesis de valor de datos/IA, (2) cadena de valor comercial + operacional, (3) back office, (4) credenciales de éxito, (5) por qué Artefact, y (6) un segundo macro-bloque "Agentes en Aerolíneas" centrado en IA agéntica (roadmap 2028-2030, casos de foco, fundaciones, cómo ayuda Artefact).
- Cargo/carga aparece solo como **sub-dominio** dentro de la cadena de valor (`Operations & Cargo`, caso "Baggage Prediction for Cargo Capacity"), no como un frente de toggle independiente.
- Todo el contenido de cara al usuario está en **español**, con un selector ES/EN funcional (traducción cliente vía diccionario).
- **Stack de tecnología:** HTML estático de archivo único, **sin framework, sin bundler, sin dependencias externas**. Vanilla CSS (dentro de `<style>` en `<head>`) y vanilla JavaScript (3+ bloques `<script>` al final de `<body>`). Deploy directo (hay `.nojekyll` → GitHub Pages). No hay React ni Tailwind.

## 2. Mapa de Secciones y Componentes

Orden real en `index.html` (de arriba hacia abajo):

### Header / Menú Ancla (`<header class="site-header">`, líneas ~3310-3329)
- Logo `Artefact` (`images/ARTEFACT.png`), ancla a `#top`.
- Nav links ancla: `POV Artefact` (`#pov-artefact`), `Cadena` (`#casos`), `Credenciales` (`#credenciales`), `Artefact` (`#artefact`).
- Botón `Agentic` (`#navAgenticBtn`) que hace scroll a la sección `#agentic-airlines`.
- Selector de idioma `ES`/`EN` (`.lang-pill`), traducción in-place vía JS (no recarga ni URL distinta).
- No hay toggle "Pasajeros vs. Carga" en el header ni en el hero.

### Sección Hero (`<section class="hero">`, ~3332-3354)
- Video de fondo autoplay/loop/muted (`videos/portada_2.mp4`), poster `images/portada.jpg`.
- Overlays decorativos: grid, glow, viñeta (solo CSS, sin imágenes).
- Título `H1`: "Agregar valor con IA en aerolíneas".
- 5 "pills" de propuesta de valor: Anticipar demanda, Optimizar capacidad, Proteger el revenue, Mejorar la experiencia del pasajero, Aumentar la eficiencia operativa.
- No hay un selector/toggle de "modo" en el hero; es narrativa única.

### Sección POV / Filosofía (`#pov-artefact`, ~3356-3380)
- Título de tesis: "La IA vale cuando mejora decisiones, procesos y se industrializa dentro del negocio."
- 3 `thesis-card` numeradas (01/02/03): Valor real / Datos conectados / Industrialización.

### Sección Cadena de Valor / Casos de Uso (`#casos`, ~3382-3412)
- Copy: "Explora las 5 áreas clave del negocio y 3 capacidades transversales".
- Badges de categoría: Comercial, Operación, Experiencia, Soporte corporativo.
- **`#route-map`**: mapa interactivo renderizado por JS (`renderRoute()`), lista clicable de los 8 `valueStages`.
- **`#stage-spotlight`**: panel de detalle (`renderSpotlight()`) que muestra, para el dominio seleccionado: definición, pains, imagen/video de loop, y sub-casos con "decisión" asociada.
- Datos fuente: array `valueStages` (JS, ~línea 3912) — **este es el array a editar para cambiar contenido de casos de uso** (por indicación del propio `CLAUDE.md`).

#### Las 8 "áreas de negocio" del array `valueStages` (5 Cadena de valor + 3 Backoffice):
| id | title | type | asset loop (img/video) |
|---|---|---|---|
| `network` | Network & Fleet Planning | Cadena de valor | `images/loops/cdv1.jpg` / `videos/loops/cdv1.mp4` |
| `revenue` | Pricing & Revenue Management | Cadena de valor | `images/loops/cdv2.jpg` / `videos/loops/cdv2.mp4` |
| `distribution` | Sales & Distribution | Cadena de valor | `images/loops/cdv3.jpg` / `videos/loops/cdv3.mp4` |
| `occ` | Flight Operations & OCC | Cadena de valor | `images/loops/cdv4.jpg` / `videos/loops/cdv4.mp4` |
| `ground` | Ground Operations & Customer Experience | Cadena de valor | `images/loops/cdv5.jpg` / `videos/loops/cdv5.mp4` |
| `crew` | Tripulación / Crew Planning | Backoffice | `images/loops/bo1.jpg` / `videos/loops/bo1.mp4` |
| `mro` | MRO & Engineering | Backoffice | `images/loops/bo2.jpg` / `videos/loops/bo2.mp4` |
| `finance` | Finanzas y Soporte Corporativo | Backoffice | `images/loops/bo3.jpg` / `videos/loops/bo3.mp4` |

Cada entrada trae: `definition`, `pains[]` (2-3 dolores), y `cases[]` (nombre + `decision` de negocio que habilita).

### Sección Credenciales / Casos de Éxito (`#credenciales`, ~3414-3702)
- Filtro por **tabs** (no checkboxes): `Cadena de Valor` (`#tab-cadena`) vs. `Back Office` (`#tab-backoffice`), controlado por `switchTab(name)`.
- No hay filtro "Pasajeros/Cargo/Mixtas"; el filtro real del sitio es **Cadena de Valor vs. Back Office**.
- Cada `cred-card` es un acordeón (`toggleCard(btn)`, botón `+`/`−`) con estructura fija: `cred-client` (cliente), `cred-area` (área de negocio), `cred-title`, y body oculto con 3 bloques: **Desafío / Solución / Resultados**.
- **Tab Cadena de Valor** (9 tarjetas): Riyadh Air (Route Insights Dashboard — Network Planning), Oman Air (Schedule Robustness Analytics — Network Planning), Aerolínea Norteamericana (Ecosistema de Revenue Forecast — RM & Pricing), Riyadh Air (Indirect Sales Insights — Sales & Distribution), Aeroméxico (Modelo de Costos de Distribución CER — Sales & Distribution), Riyadh Air (OTP & Delay Analytics — Flight Ops), Oman Air (Airport Joiners Flow Forecasting — Ground Ops), Riyadh Air (Guest Experience Journey Insights — CX), Oman Air (Baggage Prediction for Cargo Capacity — Operations & Cargo).
- **Tab Back Office** (8 tarjetas): Riyadh Air (Crew Analytics & Management), Emirates Airlines (Digital & AI Strategy Roadmap), Riyadh Air (Training Insights Dashboard — HR), Riyadh Air (Recruitment Insights Dashboard — HR), Riyadh Air (Market Experience Analytics / Competitor Sentiment), FlyDubai · Riyadh Air (Digital Marketing Analytics & Web Intelligence), Aerolínea Norteamericana (Market Share & Industry Intelligence Platform).

### Sección Por Qué Artefact (`#artefact`, ~3705-3759)
- 4 `capability` cards con imagen de fondo: `images/1-pureplayerdataandIA.jpg`, `images/2-end-to-endreal.jpg`, `images/3-cloudagnostic.jpg`, `images/4-experienciat3.jpg`.
- 3 `why-stat-card` con cifras: `+2500` empleados, `36` oficinas, `27` países.

### Sección Agentes en Aerolíneas (`#agentic-airlines`, ~3766-3907)
Sub-bloques (segunda "página" dentro del mismo archivo, con su propio sistema visual dark/vidrio):
1. **`.ag-hero`**: título "Agentes en Aerolíneas", CTA scroll a `#cadena` y botón "Visión 2028-2030" que abre un modal.
2. **`#cadena` (impact-chain)**: toggle `Flashcards` vs `Ranking` (`chain-toggle-btn`, `data-view`) sobre los mismos **8 dominios** (`domains[]`, JS ~línea 5077) evaluados en `maturity`, `viability`, `impact`, `score` y `tier` (`low`/`medium`/`high`). Se renderiza en `#chainRail` (tarjetas flip 3D) o `#chainRanking` (lista ordenada).
3. **`#foco` (Foco a corto plazo)**: 3 áreas ganadoras en `areas[]` (JS ~línea 5088) — **Pricing & Revenue Management**, **Sales & Distribution**, **Ground Operations & CX** — cada una con tabs de navegación (`#areaTabNav`) y bloques (`#areaBlocks`) que despliegan un proceso representativo con teaser, problema, valor cuantificado y 4 `stages` (AS-IS → Fase 1 → Fase 2 → TO-BE).
4. **`#fundaciones` (agentic-vision, fondo oscuro)**: modelo de capas "20% visible / 80% oculto" — Application / AI Platform / Model Infra / Hardware.
5. **`#ayuda` (Cómo te podemos ayudar)**: toggle `Aplicaciones` (`helps[]`, 6 ítems) vs `Foundation` (`helpsFoundation[]`, 4 ítems), renderizado en `#helpGrid`.
6. **Modal Visión 2028-2030** (`#visionModalOverlay`): visualización SVG de una ruta de vuelo con 6 nodos (`journey[]`, JS ~línea 5151: Búsqueda, Compra, Pre-salida, Aeropuerto, Vuelo, Post-vuelo) mostrando experiencia del pasajero, back-end agéntico y valor por etapa.

### Footer
- No existe un `<footer>` separado con enlaces legales/redes; el sitio termina en la sección `#agentic-airlines` (modal incluido). Confirmar con el negocio si se requiere agregar un footer estándar.

## 3. Clasificación de Frentes del Proyecto

| Frente | Elementos del sitio que corresponden |
|---|---|
| **Comercial** | Copy del hero y pills de valor; tesis del POV Artefact (3 `thesis-card`); textos de `valueStages` (`definition`, `pains`, `cases[].decision`); contenido de `cred-card` (Desafío/Solución/Resultados, nombres de clientes); narrativa "Por qué Artefact" y stats de presencia; textos de `domains[].read`, `areas[]` (teaser/problem/value), `helps`/`helpsFoundation`, `journey[]` (experiencia + valor por etapa). En general, **todo texto persuasivo o de propuesta de valor**. |
| **Arquitectura** | Navegación por anclas (`nav-links`, `scrollToSection`, smooth scroll), sistema de tabs (`switchTab`, `cred-tabs`/`chain-toggle`/`help-toggle`/`area-tabnav`), acordeones (`toggleCard`), lógica del mapa interactivo de cadena de valor (`renderRoute`, `renderSpotlight`, `renderValueExplorer`), modal de visión (`openVisionModal`/`closeVisionModal`), animaciones de scroll (`IntersectionObserver` para clases `.reveal`/`.in`), el motor de traducción ES/EN (`translate`, `I18N`, `TreeWalker`), y la organización de los 3 bloques `<script>`. Cualquier cambio de estructura de secciones, IDs o flujo de interacción cae aquí. |
| **Producto** | Paleta de colores (`:root` en CSS), tipografía `Roboto, Arial, sans-serif`, estilos de botones/pills/tabs, diseño responsive (media queries, ver `#agentic-airlines` con reglas específicas ~línea 3300), accesibilidad (`aria-labelledby`, `role="tab"/"tabpanel"`, `aria-live`, `aria-expanded`), ortografía/consistencia terminológica en español, tooltips/hints visuales (`tile-flip-hint`, `scroll-cue`). |

## 4. Catálogo Actual de Assets e Imágenes

### Imágenes estáticas referenciadas directamente en HTML (`<img src=...>`)
| Ruta | Usado en |
|---|---|
| `images/ARTEFACT.png` | Logo del header |
| `images/1-pureplayerdataandIA.jpg` | Capability card 01 — sección "Por qué Artefact" |
| `images/2-end-to-endreal.jpg` | Capability card 02 — sección "Por qué Artefact" |
| `images/3-cloudagnostic.jpg` | Capability card 03 — sección "Por qué Artefact" |
| `images/4-experienciat3.jpg` | Capability card 04 — sección "Por qué Artefact" |
| `images/portada.jpg` | Poster del video del hero |

### Imágenes/videos referenciados dinámicamente desde JS (template strings `images/${...}`, `videos/${...}`)
| Ruta | Usado en | Variable JS |
|---|---|---|
| `images/loops/cdv1.jpg` + `videos/loops/cdv1.mp4` | Stage "Network & Fleet Planning" | `valueStages[0]` |
| `images/loops/cdv2.jpg` + `videos/loops/cdv2.mp4` | Stage "Pricing & Revenue Management" | `valueStages[1]` |
| `images/loops/cdv3.jpg` + `videos/loops/cdv3.mp4` | Stage "Sales & Distribution" | `valueStages[2]` |
| `images/loops/cdv4.jpg` + `videos/loops/cdv4.mp4` | Stage "Flight Operations & OCC" | `valueStages[3]` |
| `images/loops/cdv5.jpg` + `videos/loops/cdv5.mp4` | Stage "Ground Operations & CX" | `valueStages[4]` |
| `images/loops/bo1.jpg` + `videos/loops/bo1.mp4` | Stage "Crew Planning" | `valueStages[5]` |
| `images/loops/bo2.jpg` + `videos/loops/bo2.mp4` | Stage "MRO & Engineering" | `valueStages[6]` |
| `images/loops/bo3.jpg` + `videos/loops/bo3.mp4` | Stage "Finanzas y Soporte Corporativo" | `valueStages[7]` |
| `images/value-network.jpg` | Flashcard dominio "Network & Fleet Planning" | `domains[0]` |
| `images/value-crew.jpg` | Flashcard dominio "Crew Planning" | `domains[1]` |
| `images/value-pricing.jpg` | Flashcard dominio "Pricing & Revenue Management" | `domains[2]` |
| `images/value-distribution.jpg` | Flashcard dominio "Sales & Distribution" (también usada en área foco #2) | `domains[3]`, `areas[1]` |
| `images/value-ground.jpg` | Flashcard dominio "Ground Operations & CX" | `domains[4]` |
| `images/value-occ.jpg` | Flashcard dominio "Flight Ops & OCC" | `domains[5]` |
| `images/value-mro.jpg` | Flashcard dominio "MRO & Engineering" | `domains[6]` |
| `images/value-finance.jpg` | Flashcard dominio "Finance & Support" | `domains[7]` |
| `images/commercial-ai.jpg` | Área de foco #1 "Pricing & Revenue Management" | `areas[0]` |
| `images/operations-ai.jpg` | Área de foco #3 "Ground Operations & CX" | `areas[2]` |
| `videos/portada_2.mp4` | Video de fondo del hero | `<video class="hero-video">` |

### Assets presentes en carpetas pero sin referencia confirmada en `index.html` (candidatos a limpieza o a uso futuro — verificar antes de borrar)
- `images/hero-airline-ai.jpg`, `images/hero-airplane-3d.png`, `images/wordmark.png`, `images/artefact_A_icon.png`, `images/bof1.png`, `images/bof2.png`, `images/bof3.png`, `images/cdv1.png`…`cdv5.png` (versión `.png` de los loops; el HTML usa las versiones `.jpg` de `images/loops/`), `gifs/portadapng.gif`.

### Ubicación de assets
- Imágenes: [images/](images/) (incluye subcarpeta [images/loops/](images/loops/) para los loops de cadena de valor/backoffice).
- Videos: [videos/](videos/) (incluye subcarpeta [videos/loops/](videos/loops/)).
- Animaciones/gif: [gifs/](gifs/).
- Regla del proyecto (`CLAUDE.md`): **no usar base64 embebido** para assets nuevos; mantener archivos en sus carpetas y referenciar por ruta relativa.

## 5. Reglas y Convenciones de Código

### Colores (variables CSS en `:root`, sin paleta separada por área de negocio — todas las áreas comparten la misma identidad navy + magenta)
```
--navy-950: #061225   --navy-900: #0a1730   --navy-800: #10213d   --navy-700: #18325a
--ink: #0f172a        --muted: #5f6b7d      --line: #e5e9f0       --soft: #f6f8fb
--white: #ffffff      --magenta: #ff0066    --cyan: #7dd3fc       --green: #38d39f
--amber: #ffc857      --slate-700: #334155  --shadow: 0 24px 70px rgba(6,18,37,.18)
```
- `--magenta` (`#ff0066`) es el color de marca/acento (CTAs, activos, hover de nav).
- No introducir hex sueltos: extender `:root` si se necesita un color nuevo.
- La sección `#agentic-airlines` reutiliza las mismas variables pero con más superficies oscuras/vidrio (`agentic-vision`, `mesh-blob`, `grain-overlay`) — es un sub-sistema visual, no una paleta nueva.

### Tipografía y marca
- `font-family: Roboto, Arial, sans-serif` en todo el sitio.
- Idioma de cara al usuario: español, con selector ES/EN (traducción in-place vía diccionario `I18N`, no cambia de URL ni recarga).

### Ubicación de contenido vs. estructura
- **Casos de uso de cadena de valor / backoffice** → array `valueStages` (JS, dentro del primer `<script>` tras `</main>`). Editar aquí, no el HTML generado dinámicamente (`#route-map`, `#stage-spotlight` se generan por JS).
- **Casos de éxito / credenciales** → sí están escritos directamente como HTML estático (`cred-card` dentro de `#tab-cadena` / `#tab-backoffice`); para añadir uno nuevo se duplica el bloque `cred-card` con su `cred-client`, `cred-area`, `cred-title` y los 3 `cred-item` (Desafío/Solución/Resultados).
- **Contenido de "Agentes en Aerolíneas"** → arrays JS en el segundo bloque `<script>` (IIFE acotada a `#agentic-airlines`): `domains[]` (8 dominios agénticos), `areas[]` (3 focos con `processes[].stages[]`), `journey[]` (6 etapas del pasajero para el modal de visión), `helps[]` / `helpsFoundation[]` (tarjetas de "cómo ayudamos").
- **Traducciones EN** → diccionario `I18N` (mismo bloque, clave = texto exacto en español, valor = inglés). Si se cambia un texto en español que ya tiene traducción, hay que actualizar también su entrada en `I18N` o la versión EN quedará desincronizada.

### Accesibilidad (mantener al editar o crear componentes)
- `aria-labelledby` en cada `<section>`.
- `role="tablist"/"tab"/"tabpanel"` + `aria-selected`/`aria-controls` en todos los sistemas de tabs (`cred-tabs`, `chain-toggle`, `help-toggle`, `area-tabnav`).
- `aria-live="polite"` en paneles que cambian dinámicamente (`#stage-spotlight`).
- `aria-expanded` en botones de acordeón (`cred-toggle`).

### Estructura general de trabajo (de `CLAUDE.md`, ver [CLAUDE.md](CLAUDE.md))
- Mantener el sitio como **un solo archivo** (`index.html`) salvo indicación contraria — no fragmentar en CSS/JS externos.
- Sin build step ni tests automatizados: verificar cambios abriendo `index.html` directamente en el navegador.
- Rama principal `main`; commit/push solo cuando el usuario lo pida explícitamente.
