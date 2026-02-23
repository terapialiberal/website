# TERAPIA LIBERAL - Guía de Despliegue

## Estilo Visual: Substack Magazine Dark
- Fondo oscuro con gradiente
- Colores dorados y rojos (identidad)
- Tipografía Georgia + Inter
- Diseño limpio tipo Substack

---

## FUNCIONALIDADES IMPLEMENTADAS

### Index
- ✅ Header negro puro con navegación
- ✅ Buscador en navbar
- ✅ Filtros por categoría (Geopolítica, Economía, Élites, Tecnología, Tecnocracia)
- ✅ Artículo destacado grande
- ✅ Lista de artículos recientes con tiempo de lectura
- ✅ Newsletter signup box
- ✅ Sección About
- ✅ Animaciones suaves (fade-in)
- ✅ Barra de progreso de lectura
- ✅ Keyboard shortcuts (j/k para navegar, / para buscar)
- ✅ RSS feed (/rss.xml)
- ✅ Sitemap XML (/sitemap.xml)
- ✅ Open Graph para redes sociales
- ✅ Loading states y efectos hover

### Artículos
- ✅ Layout consistente con el home
- ✅ Video embebido de YouTube
- ✅ Contenido en Markdown
- ✅ Barra de progreso de lectura
- ✅ Botones para compartir
- ✅ Botón back to top
- ✅ Animaciones suaves

### CMS (Decap CMS)
- ✅ Título, fecha, descripción
- ✅ Selección de categoría
- ✅ Tags
- ✅ Video ID de YouTube
- ✅ Editor Markdown

---

## PASOS PARA NETLIFY

### 1. Sube a GitHub
- Crea un nuevo repositorio
- Sube todo el contenido de terapialiberal.github.io-main
- Incluye carpetas ocultas (_config.yml, _layouts, etc.)

### 2. Conecta a Netlify
- https://netlify.com
- Add new site > Import existing project
- Selecciona tu repositorio

### 3. Habilita Identity
- Site Settings > Identity > Enable Identity
- Identity > Services > Git Gateway > Enable Git Gateway

### 4. Crea tu usuario admin
- Ve a tu-sitio.netlify.app/admin
- Sign up para crear usuario

---

## CÓMO PUBLICAR

### Método 1: Admin
1. Ve a tu-sitio.netlify.app/admin
2. New Article
3. Completa campos y Publish

### Método 2: GitHub
1. Crea articles/tu-articulo/index.md
2. Commit y Netlify hace deploy

---

## ESTRUCTURA

```
terapialiberal.github.io-main/
├── admin/           # Panel CMS
├── articles/        # Artículos MD
├── css/            # Estilos
├── _includes/      # Componentes
├── _layouts/       # Templates
├── _config.yml     # Jekyll config
├── index.html      # Home
├── rss.xml        # RSS feed
├── sitemap.xml     # SEO
└── netlify.toml   # Netlify config
```

---

## SOPORTE

- Decap CMS: https://decapcms.org/docs/
- Netlify: https://docs.netlify.com/
