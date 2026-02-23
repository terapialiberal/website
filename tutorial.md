# Terapia Liberal - Guía Completa

Este documento te explica cómo gestionar tu sitio web: publicarlo en Netlify,
subir cambios a GitHub, usar el panel de administración y crear artículos
con Markdown.

---

## 1. Cómo Publicar en Netlify

Netlify es el servicio que hostea tu sitio y lo actualiza automáticamente cada
vez que subes cambios a GitHub.

### Opción A: Conexión Automática (Recomendada)

1. Ve a https://app.netlify.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "Add new site" > "Import an existing project"
4. Selecciona tu repositorio de GitHub (terapialiberal.github.io o el nombre
   que le hayas dado)
5. Netlify detectará automáticamente la configuración:
   - Build command: (vacío)
   - Publish directory: . (o la raíz)
6. Haz clic en "Deploy site"

### Opción B: Deploy Manual sin Git

1. Ve a https://app.netlify.com
2. Inicia sesión
3. Arrastra la carpeta completa del proyecto (todos los archivos) hacia la
   zona de "Drag and drop your site output folder here"
4. Netlify te dará una URL temporal. Para tener tu dominio personalizado,
   ve a "Domain settings" y configura tu dominio.

---

## 2. Cómo Subir Cambios a GitHub

### Usando GitHub Desktop (Recomendado para principiantes)

1. Descarga GitHub Desktop desde https://desktop.github.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "File" > "Clone repository"
4. Selecciona tu repositorio de Terapia Liberal
5. Elige una carpeta local donde se guardarán los archivos
6. Una vez clonado, copia tus archivos modificados a esa carpeta
7. GitHub Desktop detectará los cambios y los mostrará en "Changes"
8. Escribe un mensaje descriptivo en el campo inferior (ej: "Actualizo
   artículos" o "Corrijo error en el menú")
9. Haz clic en "Commit to main"
10. Haz clic en "Push origin" para subir los cambios a GitHub
11. Netlify detectará los cambios y redeplegará automáticamente

### Usando la Web de GitHub

1. Ve a tu repositorio en https://github.com
2. Haz clic en el botón "Add file" > "Upload files"
3. Arrastra los archivos que quieres subir o selecciónalos
4. Escribe un mensaje de commit
5. Haz clic en "Commit changes"

### Usando Git por Terminal

```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

---

## 3. Cómo Usar el Panel de Administración (CMS)

El CMS te permite gestionar artículos sin tocar código.

### Acceder al CMS

1. Ve a: `https://tu-dominio.netlify.app/admin`
   (reemplaza "tu-dominio" por tu URL real)
2. Inicia sesión con tu usuario y contraseña de Netlify Identity
3. Si es la primera vez, el administrador debe crearte un usuario desde
   Netlify Identity en la configuración del sitio.

### Editar la Lista de Artículos (para el Home)

1. En el CMS, busca la colección "Lista de Artículos"
2. Verás una lista con todos los artículos en formato JSON
3. Para agregar uno nuevo:
   - Haz clic en el botón "Add new Artículos"
   - Completa los campos:
     - ID: número único (ej: 7)
     - Slug: URL amigable (ej: mi-nuevo-articulo)
     - Título: título del artículo
     - Descripción: resumen breve
     - Fecha: formato DD/MM/AAAA (ej: 15/02/2026)
     - Categoría: Geopolítica, Economía, Élites o Tecnología
     - Video ID de YouTube: el ID del video (la parte después de v=)
     - Tiempo: duración en minutos (número)
     - Destacado: marca la casilla para mostrar en grande en el home
4. Haz clic en "Publish" para publicar inmediatamente
   (o "Save" para guardar como borrador)

### Crear un Artículo Completo

1. En el CMS, busca la colección "Articles"
2. Haz clic en "New Articles"
3. Completa los campos:
   - Título: título del artículo
   - Fecha de Publicación: fecha y hora
   - Descripción breve: resumen corto
   - Categoría: selecciona una opción
   - Tags: palabras clave separadas por coma
   - Autor: nombre del autor
   - Artículo destacado: marca si quieres que aparezca primero
   - Video de YouTube: pega la URL completa o solo el ID
   - Imagen destacada: sube una imagen o déjala vacía (usará thumbnail de
     YouTube)
   - Excerpt: resumen para SEO
   - SEO Título: título personalizado para Google
   - SEO Descripción: descripción personalizada para Google
   - Contenido: escribe el artículo en formato Markdown

---

## 4. Sintaxis Markdown para Artículos

Markdown es un lenguaje de formato simple que se convierte automáticamente
en HTML.

### Encabezados

```markdown
# Título Principal (H1)
## Subtítulo (H2)
### Sección (H3)
```

### Párrafos y Texto

```markdown
Este es un párrafo normal.

Texto en **negrita** y en *cursiva*.
```

### Listas

```markdown
- Elemento 1
- Elemento 2
- Elemento 3

1. Primer item
2. Segundo item
```

### Links

```markdown
[Texto del enlace](https://ejemplo.com)
```

### Imágenes

```markdown
![Descripción de la imagen](ruta/imagen.jpg)

<!-- Imagen desde URL -->
![Logo](https://ejemplo.com/logo.png)
```

### Videos de YouTube

Puedes insertar videos de varias formas:

```markdown
<!-- Opción 1: Link directo (se muestra como embed si es YouTube) -->
https://www.youtube.com/watch?v=XXXXXXXXXXX

<!-- Opción 2: Iframe manual (para control total) -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/XXXXXXXXXXX"
frameborder="0" allowfullscreen></iframe>
```

### Insertar PDFs

```markdown
<!-- Opción 1: Link de descarga -->
[Descargar documento PDF](/documents/archivo.pdf)

<!-- Opción 2: Incrustar con iframe (para ver directamente) -->
<iframe src="/documents/archivo.pdf" width="100%" height="600px">
</iframe>
```

### Citas

```markdown
> Esta es una cita importante que quieres destacar en tu artículo.
```

### Código

```markdown
`código en línea`

<!-- Bloque de código -->
```
function ejemplo() {
  return "Hola mundo";
}
```
```

### Tablas

```markdown
| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Dato 1    | Dato 2    | Dato 3    |
| Dato 4    | Dato 5    | Dato 6    |
```

### Líneas Divisoras

```markdown
---
```

---

## 5. Estructura de Archivos Recomendada

```
terapialiberal.github.io/
├── index.html              # Página principal (se actualiza sola)
├── admin/
│   ├── config.yml          # Configuración del CMS
│   └── index.html          # Panel de administración
├── data/
│   └── articulos.json      # Lista de artículos (para el home)
├── articles/               # Artículos completos (Markdown)
│   ├── mi-articulo/
│   │   └── index.md
│   └── otro-articulo/
│       └── index.md
├── images/                 # Imágenes del sitio
├── documents/              # PDFs y documentos
├── css/                    # Estilos
└── js/                     # Scripts
```

---

## 6. Preguntas Frecuentes

### ¿Cada cuánto tiempo se actualiza el sitio?

Netlify suele redeplegar en menos de 1 minuto después de que subas cambios
a GitHub. Si usas el CMS con editorial workflow, los cambios entran en
producción al hacer "Publish".

### ¿Qué pasa si rompo algo en el CMS?

Git guarda todo el historial. Si algo sale mal, puedes revertir los cambios
desde GitHub o desde el panel de Netlify en la sección "Deploys".

### ¿Puedo trabajar sin conexión?

Puedes editar los archivos localmente. Para probar cambios locally, necesitas
un servidor local. Una opción simple es usar la extensión "Live Server" de
VS Code o Python:

```bash
# Con Python
python -m http.server 8000
```

Luego visita http://localhost:8000 en tu navegador.

### ¿El CMS crea páginas automáticamente?

Sí, si usas la colección "Articles" con el formato actual, el CMS crea
archivos Markdown en la carpeta articles/. Necesitarás un generador estático
(Jekyll, Eleventy, etc.) para convertir esos Markdown en HTML. También puedes
crear las páginas HTML a mano siguiendo el modelo de los artículos existentes.

---

## 7. Tips y Buenas Prácticas

- **Slug**: usa solo minúsculas, números y guiones. Ejemplo:
  "la-guerra-de-ucrania" en lugar de "La Guerra de Ucrania!!!"
- **Imágenes**: optimízalas antes de subirlas. Para web, basta con 1200px de
  ancho máximo y formato JPG o WebP.
- **Videos**: si pegas la URL completa de YouTube, el sistema intentará
  usar el thumbnail automáticamente.
- **Categorías**: limita a 4 máximo para mantener el diseño limpio.
- **Fechas**: usa formato consistente DD/MM/AAAA.

---

## 8. Soporte

Si tienes problemas técnicos o dudas sobre el funcionamiento del sitio,
revisa primero esta guía. También puedes consultar la documentación oficial:

- Netlify: https://docs.netlify.com
- Decap CMS: https://decapcms.org/docs
- Markdown: https://www.markdownguide.org/basic-syntax

---

© 2026 Terapia Liberal
