# Rediseño Frontend - Terapia Liberal

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development para implementar tarea por tarea.

**Goal:** Rediseñar el frontend completo manteniendo colores dorados/rojos, identidad de marca, con diseño híbrido videos + artículos tipo "Netflix editorial".

**Architecture:** Jekyll con Tailwind CSS + componentes custom, JSON para datos de artículos, JavaScript vanilla para interacciones.

**Tech Stack:** Jekyll, Tailwind CSS (CDN), Font Awesome, Google Fonts (Inter + Merriweather), Vanilla JS.

---

## Task 1: Actualizar Configuración Tailwind y CSS Variables

**Files:**
- Modify: `css/style.css:1-50`
- Modify: `_includes/head.html`

**Step 1: Reemplazar CSS con variables Tailwind**

```css
/* Reemplazar todo el contenido actual con: */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Colores marca */
  --gold: #d4af37;
  --gold-light: #e5c158;
  --gold-dark: #b8962e;
  --red: #dc2626;
  --red-light: #ef4444;
  /* Fondos */
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #1f1f1f;
  --bg-card: rgba(31, 31, 31, 0.8);
  /* Texto */
  --text-primary: #ffffff;
  --text-secondary: #e5e7eb;
  --text-muted: #9ca3af;
  /* Bordes */
  --border-color: #2a2a2a;
  --border-gold: rgba(212, 175, 55, 0.3);
}

/* Base styles */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  color: var(--text-primary);
  min-height: 100vh;
}

/* Tipografía body para artículos */
.article-content {
  font-family: 'Merriweather', Georgia, serif;
  font-size: 1.125rem;
  line-height: 1.9;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-delay-100 { animation-delay: 100ms; }
.animate-delay-200 { animation-delay: 200ms; }
.animate-delay-300 { animation-delay: 300ms; }
.animate-delay-400 { animation-delay: 400ms; }
.animate-delay-500 { animation-delay: 500ms; }

/* Glass effect */
.glass {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Gold gradient text */
.text-gradient-gold {
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Card hover effect */
.card-video {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-video:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15);
  border-color: var(--gold);
}

/* Play button glow */
.play-glow {
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gold-dark);
}
```

**Step 2: Verificar que head.html incluya Tailwind CDN actualizado**

```html
<!-- En head.html, asegurar: -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          gold: '#d4af37',
          'gold-light': '#e5c158',
          'gold-dark': '#b8962e',
          red: '#dc2626',
        }
      }
    }
  }
</script>
```

---

## Task 2: Rediseñar Header con Glass Effect

**Files:**
- Modify: `_includes/header.html`

**Step 1: Reemplazar header completo**

```html
<header class="fixed top-0 left-0 right-0 z-50 glass border-b border-[#2a2a2a]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <img
          src="https://yt3.ggpht.com/ZzVyDrXt4x8YWoKbISHZzC9CCtkEPCN4GRET1Xxf_wssNyw7mfN-xTbBmpwEJHO0DRQrg0Dgug=s68-c-k-c0x00ffffff-no-rj"
          alt="Terapia Liberal"
          class="w-10 h-10 rounded-full border-2 border-[#d4af37] group-hover:border-[#e5c158] transition-colors duration-300"
        />
        <span class="text-xl lg:text-2xl font-bold text-[#d4af37] group-hover:text-[#e5c158] transition-colors">
          Terapia Liberal
        </span>
      </a>

      <!-- Navegación Desktop -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="/" class="text-[#e5e7eb] hover:text-[#d4af37] transition-colors duration-300 font-medium">
          Inicio
        </a>
        <a href="#videos" class="text-[#e5e7eb] hover:text-[#d4af37] transition-colors duration-300 font-medium">
          Videos
        </a>
        <a href="#articulos" class="text-[#e5e7eb] hover:text-[#d4af37] transition-colors duration-300 font-medium">
          Artículos
        </a>
        <a href="#newsletter" class="text-[#e5e7eb] hover:text-[#d4af37] transition-colors duration-300 font-medium">
          Newsletter
        </a>
      </nav>

      <!-- Redes Sociales -->
      <div class="flex items-center gap-4">
        <a href="https://www.youtube.com/@terapialiberal" target="_blank" rel="noopener noreferrer"
           class="text-[#9ca3af] hover:text-red-500 transition-colors duration-300" aria-label="YouTube">
          <i class="fab fa-youtube text-xl"></i>
        </a>
        <a href="https://x.com/terapia_liberal" target="_blank" rel="noopener noreferrer"
           class="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300" aria-label="Twitter/X">
          <i class="fab fa-twitter text-xl"></i>
        </a>
        <a href="https://www.patreon.com/terapialiberal" target="_blank" rel="noopener noreferrer"
           class="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300" aria-label="Patreon">
          <i class="fab fa-patreon text-xl"></i>
        </a>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden text-[#e5e7eb] hover:text-[#d4af37] transition-colors" aria-label="Menú">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden glass border-t border-[#2a2a2a]">
    <div class="px-4 py-4 space-y-3">
      <a href="/" class="block text-[#e5e7eb] hover:text-[#d4af37] py-2">Inicio</a>
      <a href="#videos" class="block text-[#e5e7eb] hover:text-[#d4af37] py-2">Videos</a>
      <a href="#articulos" class="block text-[#e5e7eb] hover:text-[#d4af37] py-2">Artículos</a>
      <a href="#newsletter" class="block text-[#e5e7eb] hover:text-[#d4af37] py-2">Newsletter</a>
    </div>
  </div>
</header>

<script>
  // Toggle mobile menu
  document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
</script>
```

---

## Task 3: Rediseñar Hero Section

**Files:**
- Modify: `index.html` (reemplazar sección hero)

**Step 1: Agregar después del header**

```html
<!-- Hero Section -->
<section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0); background-size: 40px 40px;"></div>
  </div>

  <!-- Gradient Overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>

  <!-- Content -->
  <div class="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
      <span class="text-gradient-gold">Terapia</span> Liberal
    </h1>

    <p class="text-xl md:text-2xl text-[#e5e7eb] mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
      Análisis independiente sobre economía, geopolítica y filosofía liberal
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
      <a href="#videos" class="btn-primary text-lg px-8 py-4">
        <i class="fas fa-play mr-2"></i> Ver Último Video
      </a>
      <a href="#articulos" class="btn-outline text-lg px-8 py-4">
        Leer Artículos
      </a>
    </div>

    <!-- Stats / Social Proof -->
    <div class="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in-up animate-delay-400">
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-[#d4af37]">100K+</div>
        <div class="text-[#9ca3af] text-sm">Suscriptores</div>
      </div>
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-[#d4af37]">50+</div>
        <div class="text-[#9ca3af] text-sm">Análisis</div>
      </div>
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-[#d4af37]">2M+</div>
        <div class="text-[#9ca3af] text-sm">Vistas</div>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <i class="fas fa-chevron-down text-[#d4af37] text-2xl"></i>
  </div>
</section>
```

---

## Task 4: Crear Componente de Filtros

**Files:**
- Modify: `index.html` (agregar sección de filtros antes de los artículos)

**Step 1: Agregar filtros**

```html
<!-- Filtros -->
<section id="filtros" class="py-8 border-b border-[#2a2a2a]">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex flex-wrap gap-3 justify-center">
      <button class="filter-btn active" data-filter="todos">
        <i class="fas fa-th-large mr-2"></i>Todos
      </button>
      <button class="filter-btn" data-filter="video">
        <i class="fab fa-youtube mr-2"></i>Videos
      </button>
      <button class="filter-btn" data-filter="articulo">
        <i class="fas fa-file-alt mr-2"></i>Artículos
      </button>
      <button class="filter-btn" data-filter="otros">
        <i class="fas fa-ellipsis-h mr-2"></i>Otros
      </button>
    </div>

    <!-- Tags populares -->
    <div class="mt-6 flex flex-wrap gap-2 justify-center">
      <span class="text-[#9ca3af] text-sm">Populares:</span>
      <a href="#" class="tag-btn" data-tag="geopolítica">geopolítica</a>
      <a href="#" class="tag-btn" data-tag="economía">economía</a>
      <a href="#" class="tag-btn" data-tag="élites">élites</a>
      <a href="#" class="tag-btn" data-tag="tecnología">tecnología</a>
    </div>
  </div>
</section>

<style>
  .filter-btn {
    @apply px-5 py-2 rounded-full text-sm font-medium transition-all duration-300;
    @apply bg-[#1f1f1f] text-[#e5e7eb] border border-[#2a2a2a];
  }

  .filter-btn:hover {
    @apply border-[#d4af37] text-[#d4af37];
  }

  .filter-btn.active {
    @apply bg-gradient-to-r from-[#d4af37] to-[#dc2626] text-black border-transparent font-bold;
  }

  .tag-btn {
    @apply px-3 py-1 rounded-full text-xs transition-all duration-300;
    @apply bg-[#1f1f1f] text-[#9ca3af] border border-[#2a2a2a];
  }

  .tag-btn:hover {
    @apply border-[#d4af37] text-[#d4af37];
  }
</style>
```

---

## Task 5: Rediseñar Grid de Artículos/Videos (JavaScript)

**Files:**
- Modify: `js/index.js`

**Step 1: Reemplazar lógica completa del JavaScript**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('grid-analisis');

  if (!grid) return;

  // Cargar datos
  fetch('data/articles.json')
    .then(response => response.json())
    .then(articulos => {
      // Ordenar por fecha (más nuevo primero)
      articulos.sort((a, b) => {
        const dateA = new Date(a.fecha.split('/').reverse().join('-'));
        const dateB = new Date(b.fecha.split('/').reverse().join('-'));
        return dateB - dateA;
      });

      // Renderizar
      renderArticulos(articulos);

      // Inicializar filtros
      initFiltros(articulos);
    })
    .catch(error => console.error('Error:', error));
});

function renderArticulos(articulos) {
  const grid = document.getElementById('grid-analisis');
  if (!grid) return;

  if (articulos.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16">
        <i class="fas fa-search text-6xl text-[#2a2a2a] mb-4"></i>
        <p class="text-[#9ca3af] text-xl">No se encontraron artículos</p>
      </div>
    `;
    return;
  }

  const html = articulos.map((articulo, index) => {
    const delay = (index % 6) * 100;
    const esVideo = articulo.tipo === 'video';
    const tipoLabel = esVideo ? 'Video' : (articulo.tipo === 'articulo' ? 'Artículo' : 'Otro');

    // URL de miniatura
    let thumbnail = articulo.image_url;
    if (esVideo && articulo.video_id && !thumbnail) {
      thumbnail = `https://img.youtube.com/vi/${articulo.video_id}/maxresdefault.jpg`;
    }

    // Tags
    const tagsHtml = (articulo.tags || []).slice(0, 3).map(tag =>
      `<span class="tag">${tag}</span>`
    ).join('');

    return `
      <article class="card-video animate-fade-in-up" style="animation-delay: ${delay}ms" data-tipo="${articulo.tipo}" data-tags="${(articulo.tags || []).join(',')}">
        <!-- Thumbnail -->
        <div class="relative aspect-video rounded-xl overflow-hidden mb-4 group">
          ${thumbnail ? `
            <img src="${thumbnail}" alt="${articulo.titulo}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
          ` : `
            <div class="w-full h-full bg-[#1f1f1f] flex items-center justify-center">
              <i class="fas fa-${esVideo ? 'play-circle' : 'file-alt'} text-6xl text-[#2a2a2a]"></i>
            </div>
          `}

          <!-- Play Button Overlay para videos -->
          ${esVideo ? `
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center play-glow transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <i class="fas fa-play text-black text-xl ml-1"></i>
              </div>
            </div>
            <a href="https://youtu.be/${articulo.video_id}" target="_blank" rel="noopener noreferrer" class="absolute inset-0" aria-label="Ver video en YouTube"></a>
          ` : ''}

          <!-- Badge tipo -->
          <span class="absolute top-3 left-3 badge-tipo badge-${articulo.tipo}">
            ${esVideo ? '<i class="fab fa-youtube mr-1"></i>' : '<i class="fas fa-file-alt mr-1"></i>'}
            ${tipoLabel}
          </span>

          <!-- Fecha -->
          <span class="absolute top-3 right-3 date-badge">${articulo.fecha}</span>
        </div>

        <!-- Contenido -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold text-white line-clamp-2 group-hover:text-[#d4af37] transition-colors duration-300">
            <a href="${articulo.url_html || articulo.url}">${articulo.titulo}</a>
          </h3>

          <p class="text-[#9ca3af] text-sm line-clamp-2">${articulo.descripcion}</p>

          <!-- Tags -->
          ${tagsHtml ? `<div class="flex flex-wrap gap-2 pt-2">${tagsHtml}</div>` : ''}

          <!-- Links -->
          <div class="flex gap-3 pt-3">
            ${esVideo ? `
              <a href="https://youtu.be/${articulo.video_id}" target="_blank" rel="noopener noreferrer" class="btn-sm btn-video">
                <i class="fab fa-youtube mr-2"></i>Ver Video
              </a>
            ` : `
              <a href="${articulo.url_html || articulo.url}" class="btn-sm btn-articulo">
                <i class="fas fa-arrow-right mr-2"></i>Leer más
              </a>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.innerHTML = html;
}

function initFiltros(articulos) {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Actualizar estado activo
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filtrar
      const filter = btn.dataset.filter;
      const filtrados = filter === 'todos'
        ? articulos
        : articulos.filter(a => a.tipo === filter);

      renderArticulos(filtrados);
    });
  });
}
```

---

## Task 6: Agregar Estilos CSS para Nuevos Componentes

**Files:**
- Modify: `css/style.css` (agregar al final)

**Step 1: Agregar estilos adicionales**

```css
/* ===== COMPONENTES DEL REDISEÑO ===== */

/* Hero */
.hero-gradient {
  background: radial-gradient(ellipse at top, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
}

/* Badge tipo */
.badge-tipo {
  @apply px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider;
}

.badge-video {
  @apply bg-red-600 text-white;
}

.badge-articulo {
  @apply bg-[#d4af37] text-black;
}

.badge-otros {
  @apply bg-[#1f1f1f] text-[#9ca3af] border border-[#2a2a2a];
}

/* Buttons */
.btn-sm {
  @apply inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300;
}

.btn-video {
  @apply bg-red-600 text-white hover:bg-red-700;
}

.btn-articulo {
  @apply border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black;
}

/* Tags en cards */
.card-video .tag {
  @apply px-2 py-1 rounded text-xs bg-[#1f1f1f] text-[#9ca3af] border border-[#2a2a2a];
}

/* Line clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Hover effects */
.card-video:hover .badge-tipo {
  @apply ring-2 ring-[#d4af37];
}

/* Newsletter */
.newsletter-section {
  @apply relative py-20 overflow-hidden;
}

.newsletter-section::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-[#dc2626]/10;
}

/* Footer premium */
.footer-premium {
  @apply border-t border-[#2a2a2a] py-12;
}

.social-icon {
  @apply w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center text-[#9ca3af] transition-all duration-300;
}

.social-icon:hover {
  @apply bg-[#d4af37] text-black transform scale-110;
}

.social-icon.youtube:hover {
  @apply bg-red-600 text-white;
}
```

---

## Task 7: Rediseñar Newsletter Section

**Files:**
- Modify: `index.html` (agregar sección newsletter)

**Step 1: Agregar después del grid de artículos**

```html
<!-- Newsletter Section -->
<section id="newsletter" class="py-20 relative overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]"></div>
  <div class="absolute inset-0 opacity-5" style="background-image: repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%); background-size: 10px 10px;"></div>

  <div class="relative z-10 max-w-3xl mx-auto px-4 text-center">
    <span class="text-[#d4af37] uppercase tracking-widest text-sm font-bold">Newsletter</span>
    <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
      Análisis semanal en tu correo
    </h2>
    <p class="text-[#9ca3af] text-lg mb-8">
      Recibe los análisis más importantes directamente en tu inbox. Sin spam, solo contenido de valor.
    </p>

    <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
      <input
        type="email"
        placeholder="Tu email"
        class="flex-1 px-6 py-4 rounded-xl bg-[#1f1f1f] border border-[#2a2a2a] text-white placeholder-[#6b7280] focus:border-[#d4af37] focus:outline-none transition-colors"
        required
      />
      <button type="submit" class="btn-primary px-8 py-4 text-lg whitespace-nowrap">
        Suscribirse
      </button>
    </form>

    <p class="text-[#6b7280] text-sm mt-4">
      <i class="fas fa-lock mr-2"></i>No compartilhamos tu email. Cancelá cuando quieras.
    </p>
  </div>
</section>
```

---

## Task 8: Rediseñar Footer

**Files:**
- Modify: `_includes/footer.html`

**Step 1: Reemplazar footer**

```html
<footer class="footer-premium bg-[#0a0a0a]">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      <!-- Logo y descripción -->
      <div class="md:col-span-2">
        <div class="flex items-center gap-3 mb-4">
          <img
            src="https://yt3.ggpht.com/ZzVyDrXt4x8YWoKbISHZzC9CCtkEPCN4GRET1Xxf_wssNyw7mfN-xTbBmpwEJHO0DRQrg0Dgug=s68-c-k-c0x00ffffff-no-rj"
            alt="Terapia Liberal"
            class="w-12 h-12 rounded-full border-2 border-[#d4af37]"
          />
          <span class="text-2xl font-bold text-[#d4af37]">Terapia Liberal</span>
        </div>
        <p class="text-[#9ca3af] mb-6 max-w-md">
          Análisis independiente sobre economía, geopolítica y filosofía liberal. Para mentes críticas que buscan la verdad.
        </p>
        <div class="flex gap-4">
          <a href="https://www.youtube.com/@terapialiberal" target="_blank" rel="noopener noreferrer" class="social-icon youtube" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://x.com/terapia_liberal" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter/X">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.patreon.com/terapialiberal" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Patreon">
            <i class="fab fa-patreon"></i>
          </a>
        </div>
      </div>

      <!-- Links rápidos -->
      <div>
        <h4 class="text-white font-bold mb-4">Navegación</h4>
        <ul class="space-y-2">
          <li><a href="/" class="text-[#9ca3af] hover:text-[#d4af37] transition-colors">Inicio</a></li>
          <li><a href="#videos" class="text-[#9ca3af] hover:text-[#d4af37] transition-colors">Videos</a></li>
          <li><a href="#articulos" class="text-[#9ca3af] hover:text-[#d4af37] transition-colors">Artículos</a></li>
          <li><a href="#newsletter" class="text-[#9ca3af] hover:text-[#d4af37] transition-colors">Newsletter</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h4 class="text-white font-bold mb-4">Legal</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-[#9ca3af] hover:text-[#d4af37] transition-colors">Política de privacidad</a></li>
          <li><a href="#" class="text-[#9ca3af] hover:text-[#d4af37] transition-colors">Términos de uso</a></li>
          <li><a href="/admin" class="text-[#9ca3af] hover:text-[#d4af37] transition-colors">Admin</a></li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-[#2a2a2a] mt-12 pt-8 text-center">
      <p class="text-[#6b7280]">
        © 2025 Terapia Liberal. Análisis independiente para mentes críticas.
      </p>
    </div>
  </div>
</footer>
```

---

## Task 9: Agregar Botón Back to Top

**Files:**
- Modify: `index.html` (agregar antes del cierre de body)

**Step 1: Agregar botón**

```html
<!-- Back to Top -->
<button id="back-to-top" class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#d4af37] text-black flex items-center justify-center opacity-0 invisible transition-all duration-300 hover:scale-110 z-50" aria-label="Volver arriba">
  <i class="fas fa-chevron-up"></i>
</button>

<script>
  // Back to top functionality
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.remove('opacity-0', 'invisible');
    } else {
      backToTopBtn.classList.add('opacity-0', 'invisible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>
```

---

## Task 10: Verificar y Testear

**Step 1: Verificar que todos los archivos existan y estén linkeados correctamente**

- `_includes/header.html` - incluido en `_layouts/default.html`
- `_includes/footer.html` - incluido en `_layouts/default.html`
- `_includes/head.html` - incluye Tailwind
- `js/index.js` - linkeado en `index.html`
- `css/style.css` - linkeado en `head.html`

**Step 2: Probar en local**

```bash
# Si se tiene Ruby + Jekyll
bundle exec jekyll serve

# O abrir index.html directamente en browser
```

**Step 3: Verificar responsive**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Step 4: Verificar funcionamiento de filtros**
- Click en "Videos" → solo muestra videos
- Click en "Artículos" → solo muestra artículos
- Click en "Todos" → muestra todo

---

## Notas de Implementación

1. **El JSON debe tener el campo `tipo`** - Los artículos del CMS ya lo tienen (video/articulo/otros)
2. **Videos链接 a YouTube** - El JavaScript genera el link directo a YouTube con el video_id
3. **Artículos quedan en el sitio** - Los artículos Renderizan la página interna
4. **Newsletter es mockup** - Falta integrar con servicio real (Mailchimp, ConvertKit, etc.)

---

## Orden de Implementación Recomendado

1. Task 1: CSS + Tailwind config
2. Task 2: Header
3. Task 3: Hero
4. Task 4: Filtros (HTML)
5. Task 6: Estilos CSS adicionales
6. Task 5: JavaScript (grid + filtros)
7. Task 7: Newsletter
8. Task 8: Footer
9. Task 9: Back to top
10. Task 10: Testing
