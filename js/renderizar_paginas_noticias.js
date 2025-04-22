/**
 * renderizar_paginas_noticias.js
 *
 * Carga y muestra los artículos detallados en las páginas de sección
 * (general.html, deportes.html, negocios.html, nacional.html, tecnologia.html).
 */

/**
 * Genera el HTML para mostrar todos los artículos de una sección específica.
 * @param {object} sectionData - El objeto de la sección desde noticiasCache (ej: noticiasCache['general']).
 * @param {string} sectionKey - La clave de la sección ('general', 'deportes', etc.) usada para generar IDs.
 * @returns {string} - El string HTML con todos los artículos de la sección.
 */
const generar_html_pagina_general = (sectionData, sectionKey) => {
    let html_articulos = "";
    // Clases Bootstrap alternas para fondos de artículos (opcional)
    const background_styles = [
        "bg-white",
        "bg-light"
    ];

    // Verifica si hay datos y artículos
    if (!sectionData || !sectionData.articles || sectionData.articles.length === 0) {
        return '<div class="col-12"><p class="text-center text-muted fst-italic mt-5">No hay artículos disponibles en esta sección.</p></div>';
    }

    // Itera sobre cada artículo de la sección
    for(let a = 0; a < sectionData.articles.length; a++) {
        const articulo = sectionData.articles[a];
        let fecha = 'Fecha no disponible';
        // Intenta formatear la fecha
        try {
            const dateObj = new Date(articulo.date);
            if (!isNaN(dateObj)) {
                 fecha = dateObj.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });
            }
        } catch(e) {
            console.warn(`Fecha inválida para artículo "${articulo.title}": ${articulo.date}`);
        }

        // Generar ID único para el artículo
        const articleId = `article-${sectionKey}-${a}`;

        // Construir ruta de imagen con fallback y ruta corregida para subcarpeta html/
        const imgPath = `../assets/img/${articulo.img || 'Logo1.jpeg'}`;

        // Generar el HTML del artículo
        html_articulos += `
        <article id="${articleId}" class="news-card ${background_styles[a % 2]} p-4 mb-4 shadow-sm rounded border">
            <div class="text-center">
                <h2 class="mb-3">${articulo.title}</h2>
                <p class="text-muted small mb-3">
                    <i class="fas fa-calendar-alt me-1"></i>Publicado: ${fecha}
                    ${articulo.category ? `| <span class="badge bg-secondary">${articulo.category}</span>` : ''}
                </p>
                <img
                    src="${imgPath}"
                    alt="${articulo["alt-img"] || articulo.title}"
                    class="img-fluid rounded mb-4 shadow-sm" style="max-height: 450px; width: auto;"
                />
                <p class="lead text-start">${articulo.description}</p>
            </div>
            ${articulo.details ? `<div class="article-details text-start mt-4 pt-4 border-top">${articulo.details}</div>` : ""}
        </article>
        `;
    }
    return html_articulos;
};

// --- Lógica Principal de Renderizado para Páginas de Sección ---

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado, iniciando renderizado de página de sección...");

    // Obtiene diccionario de noticias desde localStorage
    let noticiasCache = localStorage.getItem("noticias");
    if (!noticiasCache) {
        console.error("Error: No se encontraron noticias en localStorage.");
        return;
    }
    try {
        noticiasCache = JSON.parse(noticiasCache);
    } catch (e) {
        console.error("Error al parsear JSON de noticias desde localStorage:", e);
        return;
    }

    // Identifica TODOS los posibles contenedores en las páginas de sección
    const pagina_generales_container = document.getElementById("articles-container-general");
    const pagina_negocios_container = document.getElementById("articles-container-negocios");
    const pagina_deportes_container = document.getElementById("articles-container-deportes");
    // --> Añadir selectores para los nuevos contenedores <--
    const pagina_nacional_container = document.getElementById("articles-container-nacional");
    const pagina_tecnologia_container = document.getElementById("articles-container-tecnologia");

    // Renderiza el contenido en el contenedor que corresponda, pasando la clave de sección
    if(pagina_generales_container) {
        console.log("Renderizando noticias generales...");
        pagina_generales_container.innerHTML = generar_html_pagina_general(noticiasCache["general"], 'general');
    } else if(pagina_negocios_container) {
        console.log("Renderizando noticias de negocios...");
        pagina_negocios_container.innerHTML = generar_html_pagina_general(noticiasCache["negocios"], 'negocios');
    } else if(pagina_deportes_container) {
        console.log("Renderizando noticias de deportes...");
        pagina_deportes_container.innerHTML = generar_html_pagina_general(noticiasCache["deportes"], 'deportes');
    }
    // --> Añadir lógica para los nuevos contenedores <--
    else if(pagina_nacional_container) {
        console.log("Renderizando noticias nacionales...");
        pagina_nacional_container.innerHTML = generar_html_pagina_general(noticiasCache["nacional"], 'nacional');
    } else if(pagina_tecnologia_container) {
        console.log("Renderizando noticias de tecnología...");
        pagina_tecnologia_container.innerHTML = generar_html_pagina_general(noticiasCache["tecnologia"], 'tecnologia');
    }
    // <-- Fin lógica nueva -->
    else {
        console.log("No se encontró un contenedor de artículos conocido en esta página.");
    }

    console.log("Renderizado de página de sección completado.");

}); // Fin del addEventListener('DOMContentLoaded')