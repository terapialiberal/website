# Terapia Liberal - Contexto del Proyecto

## Información General

- **Sitio:** https://terapialiberal.netlify.app
- **Tipo:** Sitio estático (Jekyll) con CMS
- **Hosting:** Netlify
- **CMS:** Decap CMS (antes Netlify CMS)
- **Estilo:** Tailwind CSS + Font Awesome + Google Fonts (Inter, Georgia)

---

## Estructura de Archivos

```
/
├── _config.yml              # Configuración de Jekyll
├── _layouts/
│   ├── default.html         # Layout base
│   └── article.html         # Layout de artículos
├── _includes/
│   ├── head.html
│   ├── header.html
│   └── footer.html
├── _plugins/
│   └── youtube_filter.rb    # Filtro para extraer ID de YouTube
├── articles/                # Artículos (markdown para CMS)
├── admin/
│   ├── index.html           # Entry point del CMS
│   ├── config.yml           # Configuración del CMS
│   └── site-settings.yml    # Settings del sitio
├── data/
│   └── articles.json        # Base de datos de artículos (para JS)
├── js/
│   └── index.js             # Lógica del home (carga JSON)
├── css/
│   ├── style.css
│   └── article.css
└── tutorial_cms.txt         # Manual del CMS
```

---

## Artículos Existentes

### En formato Markdown (para CMS)
- `articles/gaza-venezuela-arquitectos-ww3/index.md`
- `articles/terapia-liberal-rimland-nuevo-orden-mundial/index.md`

### En formato HTML (estáticos/generados)
- 21 artículos HTML estáticos en la carpeta `articles/`

---

## CMS - Configuración Actual

**URL del CMS:** `/admin`

**Colecciones configuradas:**

1. **Artículos / Videos** (`posts`)
   - Folder: `articles`
   - Extension: `.md`
   - Campos: title, date, description, tipo (video/articulo), video_id, image, tags, author, featured, body

2. **Configuración** (`settings`)
   - Tipo: files (no folder)
   - Archivo: `admin/site-settings.yml`
   - Campos: site_title, site_description, youtube_url, twitter_url, patreon_url, newsletter_email

**Medios:**
- Folder: `images/`
- Configuración: Local (no Cloudinary)

---

## YouTube - Funcionalidad

### Campo video_id acepta:
- ID directo: `9AMPffjQREY`
- URLs completas:
  - `https://www.youtube.com/watch?v=9AMPffjQREY`
  - `https://youtu.be/9AMPffjQREY`
  - `https://www.youtube.com/embed/9AMPffjQREY`
  - `https://www.youtube.com/shorts/9AMPffjQREY`

### Implementación:
- Filtro Liquid: `_plugins/youtube_filter.rb`
- Función JS: `getYouTubeId()` en `js/index.js`

---

## Ficheros Importantes

### admin/config.yml
```yaml
backend:
  name: git-gateway
  branch: main

publish_mode: "editorial_workflow"

media_folder: "images"
public_folder: "/images"
```

### netlify.toml
- Build: Simple redirect (sitio estático)
- Redirect: `/*` → `/index.html`

### _config.yml
- Título: Terapia Liberal
- URL: https://terapialiberal.netlify.app
- Markdown: kramdown
- Permalinks: pretty

---

## Customizaciones Realizadas

1. **Filtro YouTube:** Plugin Ruby para extraer ID de URL
2. **Colección Settings:** Cambiada de folder a files (requerido por Decap CMS)
3. **Artículos MD:** Actualizados campos para compatibilidad CMS
4. **Tutorial CMS:** Creado `tutorial_cms.txt` con manual

---

## Datos del Usuario

- **Autor:** Nicolás Martínez Lage
- **Cloudinary (configurado pero no activo):**
  - Cloud name: terapialiberal
  - API Key: 72f18011b83f79de88038554f3c0cc

---

## Notas Futuras

1. ** Quartz / Obsidian:**
   - **Sitio Quartz:** https://terapialiberal-obsidian.netlify.app/ (conectado a otro repo)
   - **Integración:** Enlace "Notas" agregado en el menú del header
   - Pendiente: definir URL y tipo de redirección

2. **Mejoras posibles:**
   - Tema oscuro para el CMS
   - Campo para PDFs
   - Cloudinary para medios

---

## Comandos Útiles

```bash
# Build local (si se necesita)
jekyll serve

# Sube cambios a Netlify automáticamente con git push
```

---

## Enlaces

- CMS: https://terapialiberal.netlify.app/admin
- Netlify: https://app.netlify.com
- Cloudinary: https://cloudinary.com (cuenta: terapialiberal)
