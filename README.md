# Centro Escolar Cantón Mizata — Plataforma de Transparencia Institucional

Este repositorio contiene el código fuente de la plataforma web informativa del **Centro Escolar Cantón Mizata** (Código de Infraestructura: `60157`), ubicado en el distrito de La Libertad Costa, El Salvador. 

El sitio ha sido diseñado bajo una estricta filosofía visual de alto rendimiento, accesibilidad y minimalismo estético, inspirada en las pautas de diseño y sistemas de diseño de interfaces limpias (Glassmorphism e interfaces premium).

---

## ⚠️ Aclaración Importante (Disclaimer)

**Este sitio web NO es una plataforma oficial del Ministerio de Educación, Ciencia y Tecnología (MINED) ni del Gobierno de El Salvador.** Se trata de una **iniciativa ciudadana e independiente** creada con el único propósito de centralizar, estructurar y hacer más accesible la información estadística y de infraestructura escolar para la comunidad educativa, padres de familia, estudiantes y la dirección local liderada por la docente Janeth Esmeralda Lue Morales. Todos los datos cuantitativos se manejan de forma transparente y con fines puramente informativos y comunitarios.

---

## 🚀 Características Principales

- **Arquitectura de Código Limpio:** Todo el proyecto está consolidado en un único archivo autónomo (`index.html`) optimizado para una carga instantánea sin dependencias de servidores pesados.
- **Visualización Dinámica de Datos (Single Source of Truth):** Integración nativa con `Chart.js` para renderizar gráficos fluidos y reactivos:
  - Distribución analítica por géneros.
  - Densidad de matrícula general ordenada cronológicamente por ciclo escolar.
  - Matriz analítica avanzada de dobles barras por aula.
- **Diseño Responsivo e Inclusivo:** Estructurado con `Tailwind CSS`, garantizando una experiencia de usuario prémium tanto en dispositivos móviles como en pantallas de escritorio.
- **Navegación Fluida (SPA):** Enrutador interno nativo por JavaScript que evita recargas de página innecesarias, emulando el comportamiento de una Single Page Application de alto rendimiento.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** & **CSS3** (Custom Animations & Glassmorphism Core).
- **Tailwind CSS** (v3.x — Vía CDN para estilos ágiles y utilitarios).
- **JavaScript** (ES6+ — Lógica nativa para renderizado de tablas y enrutamiento).
- **Chart.js** (v3.9.1 — Librería avanzada para la computación gráfica de datos).

---

## 📂 Estructura del Proyecto

El proyecto está diseñado para ser extremadamente portátil:

```yaml
.
├── README.md          # Documentación técnica del proyecto (Este archivo)
└── index.html         # Archivo maestro (Contiene la interfaz, estilos y lógica JS)
