# Rediseño Frontend - Terapia Liberal

> **For Claude:** Implementar este plan tarea por tarea.

**Goal:** Rediseñar el sitio completo manteniendo identidad visual (gold #d4af37, red #dc2626), con diseño híbrido videos + artículos, filtros, y animaciones cinematográficas.

**Architecture:** Jekyll + Tailwind CSS + vanilla JS. El sitio es estático, no hay backend. El JSON se genera automáticamente desde artículos del CMS.

**Tech Stack:** Jekyll, Tailwind CSS (CDN), Font Awesome, Google Fonts (Inter, Merriweather), vanilla JavaScript.

---

## Tareas

### Task 1: Actualizar estilos CSS base (style.css)

**Archivos:**
- Modificar: `css/style.css`

**Paso 1: Reemplazar contenido completo**

Reemplazar todo el contenido actual con los nuevos estilos que incluyen:
- Variables CSS actualizadas según guía de marca
- Tipografía Inter + Merriweather
- Cards para videos y artículos diferenciadas
- Animaciones de entrada
- Efectos hover dorados
- Header con blurglass
- Footer premium
- Botones y badges
- Responsive breakpoints

**Paso 2: Verificar en navegador**

Abrir `index.html` y verificar:
- Fondo con gradiente #0a0a0a → #1a1a1a
- Cards con bordes redondeados 16-24px
- Efectos hover funcionando
- Tipografía legible

---

### Task 2: Rediseñar header con blurglass

**Archivos:**
- Modificar: `_includes/header.html`

**Paso 1: Implementar header**

```html
<header class="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo + Nombre -->
      <a href="/" class="flex items-center gap-3 group">
        <img src="https://yt3.ggpht.com/ZzVyDrXt4x8YWoKbISHZzC9CCtkEPCN4GRET1Xxf_wssNyw7mfN-xTbBmpwEJHO0DRQrg0Dgug=s68-c-k-c0x00ffffff-no-rj"
             alt="Terapia Liberal"
             class="w-10 h-10 rounded-full border-2 border-[#d4af37] group-hover:border-[#dc2626] transition-all duration-300">
        <span class="text-2xl font-bold text-[#d4af37] group-hover:text-white transition-colors">
          Terapia Liberal
        </span>
      </a>

      <!-- Navegación Desktop -->
      <nav class="hidden md:flex items-center gap-6">
        <a href="/" class="text-gray-300 hover:text-[#d4af37] transition-colors font-medium">Inicio</a>
        <a href="#videos" class="text-gray-300 hover:text-[#d4af37] transition-colors font-medium">Videos</a>
        <a href="#articulos" class="text-gray-300 hover:text-[#d4af37] transition-colors font-medium">Artículos</a>
        <a href="https://www.patreon.com/terapialiberal" target="_blank"
           class="px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#dc2626] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Suscribirse
        </a>
      </nav>

      <!-- Botón menú móvil -->
      <button id="mobile-menu-btn" class="md:hidden text-white p-2">
        <i class="fas fa-bars text-xl"></i>
      </button>
    </div>
  </div>

  <!-- Menú móvil -->
  <div id="mobile-menu" class="hidden md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
    <nav class="flex flex-col p-4 gap-4">
      <a href="/" class="text-gray-300 hover:text-[#d4af37] py-2">Inicio</a>
      <a href="#videos" class="text-gray-300 hover:text-[#d4af37] py-2">Videos</a>
      <a href="#articulos" class="text-gray-300 hover:text-[#d4af37] py-2">Artículos</a>
      <a href="https://www.patreon.com/terapialiberal" target="_blank"
         class="px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#dc2626] text-black font-semibold rounded-lg text-center">
        Suscribirse
      </a>
    </nav>
  </div>
</header>
```

**Paso 2: Agregar toggle JS para móvil**

Agregar al final de `js/index.js`:
```javascript
// Mobile menu toggle
document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
  document.getElementById('mobile-menu')?.classList.toggle('hidden');
});
```

---

### Task 3: Rediseñar footer premium

**Archivos:**
- Modificar: `_includes/footer.html`

**Paso 1: Implementar footer**

```html
<footer class="bg-black border-t border-white/10 mt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Logo + Descripción -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <img src="https://yt3.ggpht.com/ZzVyDrXt4x8YWoKbISHZzC9CCtkEPCN4GRET1Xxf_wssNyw7mfN-xTbBmpwEJHO0DRQrg0Dgug=s68-c-k-c0x00ffffff-no-rj"
               alt="Terapia Liberal"
               class="w-10 h-10 rounded-full border-2 border-[#d4af37]">
          <span class="text-xl font-bold text-[#d4af37]">Terapia Liberal</span>
        </div>
        <p class="text-gray-400 text-sm">Análisis independiente para mentes críticas. Geopolítica, economía y filosofía liberal.</p>
      </div>

      <!-- Links rápidos -->
      <div>
        <h4 class="text-white font-semibold mb-4">Navegación</h4>
        <nav class="flex flex-col gap-2">
          <a href="/" class="text-gray-400 hover:text-[#d4af37] transition-colors">Inicio</a>
          <a href="#videos" class="text-gray-400 hover:text-[#d4af37] transition-colors">Videos</a>
          <a href="#articulos" class="text-gray-400 hover:text-[#d4af37] transition-colors">Artículos</a>
        </nav>
      </div>

      <!-- Redes sociales -->
      <div>
        <h4 class="text-white font-semibold mb-4">Síguenos</h4>
        <div class="flex gap-4">
          <a href="https://www.youtube.com/@terapialiberal" target="_blank"
             class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#dc2626] hover:text-white transition-all">
            <i class="fab fa-youtube text-lg"></i>
          </a>
          <a href="https://x.com/terapia_liberal" target="_blank"
             class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black transition-all">
            <i class="fab fa-twitter text-lg"></i>
          </a>
          <a href="https://www.patreon.com/terapialiberal" target="_blank"
             class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black transition-all">
            <i class="fab fa-patreon text-lg"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white/10 mt-8 pt-8 text-center">
      <p class="text-gray-500 text-sm">© 2025 Terapia Liberal. Análisis independiente para mentes críticas.</p>
    </div>
  </div>
</footer>
```

---

### Task 4: Rediseñar homepage con grid híbrido

**Archivos:**
- Modificar: `index.html`

**Paso 1: Estructura del home**

Reemplazar contenido principal (dentro de `<main>`) con:

```html
<!-- Hero Section -->
<section class="pt-32 pb-16 px-4">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
        Análisis Independiente para <span class="text-[#d4af37]">Mentes Críticas</span>
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Geopolítica, economía y filosofía liberal. Sin filtros, sin corporaciones.
      </p>
    </div>

    <!-- Filtros -->
    <div class="flex flex-wrap justify-center gap-3 mb-12" id="filters">
      <button class="filter-btn active px-6 py-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#dc2626] text-black font-semibold" data-filter="all">
        Todos
      </button>
      <button class="filter-btn px-6 py-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all" data-filter="video">
        Videos
      </button>
      <button class="filter-btn px-6 py-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all" data-filter="articulo">
        Artículos
      </button>
    </div>
  </div>
</section>

<!-- Grid de Contenido -->
<section class="px-4 pb-20">
  <div class="max-w-7xl mx-auto">
    <div id="content-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Contenido cargado dinámicamente desde JS -->
    </div>
  </div>
</section>
```

---

### Task 5: Actualizar JavaScript para cards híbridas

**Archivos:**
- Modificar: `js/index.js`

**Paso 1: Reemplazar función de renderizado**

Reemplazar la función que renderiza las cards con:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('content-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!grid) return;

    fetch('data/articles.json')
        .then(response => response.json())
        .then(articles => {
            // Ordenar por fecha (más nuevo primero)
            articles.sort((a, b) => {
                const dateA = new Date(a.fecha.split('/').reverse().join('-'));
                const dateB = new Date(b.fecha.split('/').reverse().join('-'));
                return dateB - dateA;
            });

            // Renderizar todas las cards
            renderCards(articles);

            // Filtros
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Actualizar estado activo
                    filterBtns.forEach(b => {
                        b.classList.remove('active', 'bg-gradient-to-r', 'from-[#d4af37]', 'to-[#dc2626]', 'text-black');
                        b.classList.add('border', 'border-[#d4af37]', 'text-[#d4af37]');
                    });
                    btn.classList.add('active', 'bg-gradient-to-r', 'from-[#d4af37]', 'to-[#dc2626]', 'text-black');
                    btn.classList.remove('border', 'border-[#d4af37]', 'text-[#d4af37]');

                    // Filtrar
                    const filter = btn.dataset.filter;
                    const filtered = filter === 'all'
                        ? articles
                        : articles.filter(a => a.tipo === filter);
                    renderCards(filtered);
                });
            });
        })
        .catch(error => console.error('Error:', error));

    function renderCards(articles) {
        grid.innerHTML = articles.map((article, index) => {
            const isVideo = article.video_id;
            const youtubeUrl = isVideo ? `https://youtu.be/${article.video_id}` : '';
            const thumbnail = isVideo
                ? `https://img.youtube.com/vi/${article.video_id}/maxresdefault.jpg`
                : article.image_url || '';

            return `
            <article class="card-article group" style="animation-delay: ${index * 0.1}s">
                <!-- Thumbnail -->
                <div class="relative aspect-video overflow-hidden rounded-t-2xl">
                    ${isVideo ? `
                        <div class="video-thumbnail" onclick="window.open('${youtubeUrl}', '_blank')">
                            <img src="${thumbnail}" alt="${article.titulo}" loading="lazy">
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                            <span class="absolute bottom-3 right-3 bg-black/80 text-[#d4af37] px-3 py-1 rounded-full text-xs font-semibold">
                                VIDEO
                            </span>
                        </div>
                    ` : `
                        <img src="${thumbnail}" alt="${article.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <span class="absolute bottom-3 right-3 bg-[#dc2626] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            ARTÍCULO
                        </span>
                    `}
                </div>

                <!-- Contenido -->
                <div class="p-5 bg-[#1f1f1f]/80 backdrop-blur-sm rounded-b-2xl border-t border-white/5">
                    <span class="date-badge text-xs">${article.fecha}</span>
                    <h3 class="text-lg font-bold text-white mt-2 mb-2 line-clamp-2 group-hover:text-[#d4af37] transition-colors">
                        ${article.titulo}
                    </h3>
                    <p class="text-gray-400 text-sm line-clamp-2">${article.descripcion}</p>

                    <!-- Tags -->
                    ${article.tags && article.tags.length > 0 ? `
                        <div class="flex flex-wrap gap-2 mt-3">
                            ${article.tags.slice(0, 3).map(tag => `
                                <span class="text-xs text-gray-500">#${tag}</span>
                            `).join('')}
                        </div>
                    ` : ''}

                    <!-- Botones -->
                    <div class="flex gap-3 mt-4">
                        ${isVideo ? `
                            <a href="${youtubeUrl}" target="_blank" class="btn btn-sm bg-[#dc2626] text-white hover:bg-[#dc2626]/80">
                                <i class="fab fa-youtube"></i> Ver Video
                            </a>
                        ` : ''}
                        <a href="${article.url_html}" class="btn btn-sm btn-outline">
                            <i class="fas fa-arrow-right"></i> Leer
                        </a>
                    </div>
                </div>
            </article>
            `;
        }).join('');
    }

    // Mobile menu
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-menu')?.classList.toggle('hidden');
    });
});
```

---

### Task 6: Agregar animaciones CSS

**Archivos:**
- Agregar a: `css/style.css`

**Paso 1: Agregar animaciones**

Al final del archivo, agregar:

```css
/* Animaciones de entrada */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

.card-article {
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
    background: linear-gradient(135deg, rgba(31, 31, 31, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-article:hover {
    transform: translateY(-8px);
    border-color: rgba(212, 175, 55, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 60px rgba(212, 175, 55, 0.1);
}

/* Video thumbnail hover */
.video-thumbnail {
    position: relative;
    cursor: pointer;
}

.video-thumbnail img {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.video-thumbnail:hover img {
    transform: scale(1.1);
}

.video-thumbnail:hover .play-button {
    transform: translate(-50%, -50%) scale(1.2);
    background: #d4af37;
    color: #000;
}

/* Botón play */
.play-button {
    width: 70px;
    height: 70px;
    background: rgba(0, 0, 0, 0.8);
    border: 3px solid #d4af37;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

/* Filter buttons */
.filter-btn.active {
    background: linear-gradient(135deg, #d4af37 0%, #dc2626 100%) !important;
    color: #000 !important;
    border: none !important;
}

/* Header blurglass */
.backdrop-blur-xl {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

/* Gold gradient text */
.text-gradient-gold {
    background: linear-gradient(135deg, #d4af37 0%, #e5c158 50%, #dc2626 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Scrollbar personalizada */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #d4af37;
}
```

---

### Task 7: Verificar ytestear

**Paso 1: Abrir index.html en navegador**

Verificar:
- [ ] Header con blurglass y logo dorado
- [ ] Filtros funcionando (Todos/Videos/Artículos)
- [ ] Cards con animación de entrada
- [ ] Hover en cards produce efecto dorado
- [ ] Videos tienen thumbnail de YouTube + play button
- [ ] Artículos tienen imagen de portada
- [ ] Footer con iconos sociales
- [ ] Responsive en móvil

---

### Task 8: Guardar y documentar

**Archivos modificados:**
- `css/style.css` - Estilos completos redesign
- `_includes/header.html` - Header con blurglass
- `_includes/footer.html` - Footer premium
- `index.html` - Estructura home con filtros
- `js/index.js` - Lógica de renderizado híbrido

**No incluye:**
- Artículos individuales (usa el layout actual)
- CMS (sin cambios)
- Generator de JSON (ya implementado antes)

---

## Notas

1. El sitio usa Tailwind CSS vía CDN, las clases usada ya existen
2. El JSON debe generarse automáticamente desde el plugin Jekyll
3. Para probar localmente: `bundle exec jekyll serve`
4. Los artículos existentes HTML siguen funcionando
5. Solo los nuevos artículos del CMS se agregan automáticamente al index
