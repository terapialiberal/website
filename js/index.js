document.addEventListener('DOMContentLoaded', function() {
    const featuredContainer = document.getElementById('featured-analysis-container');
    const grid = document.getElementById('grid-analisis');

    if (!grid || !featuredContainer) return;

    fetch('data/articles.json')
        .then(response => response.json())
        .then(baseDeDatosAnalisis => {
            // Ordenar por fecha (el más nuevo primero)
            baseDeDatosAnalisis.sort((a, b) => {
                const dateA = new Date(a.fecha.split(' ')[0].split('/').reverse().join('-'));
                const dateB = new Date(b.fecha.split(' ')[0].split('/').reverse().join('-'));
                return dateB - dateA;
            });

            // Análisis Destacado
            if (baseDeDatosAnalisis.length > 0) {
                const featuredAnalysis = baseDeDatosAnalisis.shift();

                let featuredVideoLink = '';
                let featuredOnClick = '';
                let playButton = '';

                if (featuredAnalysis.video_id) {
                    const urlVideo = `https://youtu.be/${featuredAnalysis.video_id}`;
                    featuredVideoLink = `<a href="${urlVideo}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-youtube"></i> Ver Video
                    </a>`;
                    featuredOnClick = `window.open('${urlVideo}', '_blank')`;
                    playButton = `<div class="play-button"><i class="fas fa-play"></i></div>`;
                }

                const featuredHtml = `
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div class="video-thumbnail" ${featuredOnClick ? `onclick="${featuredOnClick}"` : ''}>
                            <img src="${featuredAnalysis.image_url}" alt="${featuredAnalysis.titulo}">
                            ${playButton}
                        </div>
                    </div>
                    <div>
                        <span class="date-badge mb-4">${featuredAnalysis.fecha}</span>
                        <h4 class="text-2xl font-bold mb-4 gold-text">${featuredAnalysis.titulo}</h4>
                        <p class="text-gray-300 mb-6">${featuredAnalysis.descripcion}</p>
                        <div class="flex flex-wrap gap-4">
                            <a href="${featuredAnalysis.url_html}" class="btn btn-primary">
                                <i class="fas fa-arrow-right"></i> Ver Análisis Completo
                            </a>
                            ${featuredVideoLink}
                        </div>
                    </div>
                </div>`;
                featuredContainer.innerHTML = featuredHtml;
            }

            // Grilla de Artículos Anteriores
            const tarjetasHTML = baseDeDatosAnalisis.map(analisis => {
                let mediaHtml = '';
                let videoLink = '';

                if (analisis.video_id) {
                    const urlVideo = `https://youtu.be/${analisis.video_id}`;
                    mediaHtml = `
                    <div class="video-thumbnail mb-4" onclick="window.open('${urlVideo}', '_blank')">
                        <img src="https://img.youtube.com/vi/${analisis.video_id}/maxresdefault.jpg" alt="${analisis.titulo}" loading="lazy">
                        <div class="play-button"><i class="fas fa-play"></i></div>
                    </div>`;
                    videoLink = `<a href="${urlVideo}" target="_blank" class="btn btn-outline btn-sm">
                        <i class="fab fa-youtube"></i> Video
                    </a>`;
                } else if (analisis.image_url) {
                    mediaHtml = `
                    <div class="mb-4">
                        <img src="${analisis.image_url}" alt="${analisis.titulo}" class="w-full h-auto rounded-lg" loading="lazy">
                    </div>`;
                }

                return `
                <article class="card article-card">
                    ${mediaHtml}
                    <div class="content">
                        <span class="date-badge mb-3">${analisis.fecha}</span>
                        <a href="${analisis.url_html}" class="title">${analisis.titulo}</a>
                        <p class="excerpt">${analisis.descripcion}</p>
                        <div class="flex flex-wrap gap-3 mt-auto pt-4">
                            <a href="${analisis.url_html}" class="btn btn-outline btn-sm">
                                <i class="fas fa-arrow-right"></i> Leer más
                            </a>
                            ${videoLink}
                        </div>
                    </div>
                </article>`;
            }).join('');

            grid.innerHTML = tarjetasHTML;
        })
        .catch(error => console.error('Error al cargar los análisis:', error));
});
