/**renderizar_noticias_principal.js

/**
 * Genera el HTML para una tarjeta de noticia Bootstrap dentro de su columna responsive.
 * @param {object} articulo - El objeto de artículo con title, description, img, category, etc.
 * @param {string} sectionHref - La URL base de la sección (ej: 'html/general.html').
 * @param {number} index - El índice del artículo en el array de la sección.
 * @param {string} sectionKey - La clave de la sección ('general', 'deportes', 'negocios', 'nacional', 'tecnologia').
 * @returns {string} - El string HTML de la columna con la tarjeta.
 */
const generar_html_tarjeta_noticia = (articulo, sectionHref, index, sectionKey) => {
    let columnClasses = '';
    let imgHeight = '200px'; // Altura por defecto para imagen de tarjeta

    // Determinar clases de columna y altura de imagen según la sección y el índice
    if (sectionKey === 'general') {
        if (index === 0) {
            // Primera noticia general: columna más grande
            columnClasses = 'col-md-6 col-lg-8';
            imgHeight = '280px'; // Imagen un poco más alta para la destacada
        } else {
            // Otras noticias generales: columnas más pequeñas
            columnClasses = 'col-md-6 col-lg-4';
            imgHeight = '180px';
        }
    } else { // Deportes, Negocios, Nacional, Tecnología: columnas iguales y más pequeñas
        columnClasses = 'col-md-4';
        imgHeight = '180px';
    }

    // Construir ruta de imagen (asumiendo que está en assets/img/)
    const imgPath = `assets/img/${articulo.img || 'Logo1.jpeg'}`; // Usa logo por defecto si no hay img
    // Generar un ID único para enlazar desde el index a la noticia específica en su página
    const articleId = `article-${sectionKey}-${index}`;
    // Crear el enlace completo al artículo en su página de sección
    const readMoreLink = `${sectionHref}#${articleId}`;

    // Retornar el HTML de la columna con la tarjeta Bootstrap
    return `
        <div class="${columnClasses} mb-4">
            <div class="card news-card h-100 shadow-sm overflow-hidden">
                <img src="${imgPath}" class="card-img-top" alt="${articulo['alt-img'] || articulo.title}" style="height: ${imgHeight}; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title h6">${articulo.title}</h5>
                    <span class="badge bg-primary mb-2 align-self-start">${articulo.category || 'General'}</span>
                    <p class="card-text small flex-grow-1">${articulo.description}</p>
                    <div class="mt-auto text-end">
                        <a href="${readMoreLink}" class="btn btn-outline-primary btn-sm">Leer más</a>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// --- Lógica Principal de Renderizado para index.html ---

// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    console.log("DOM cargado, iniciando renderizado de noticias principal para TODAS las secciones...");

    // Obtiene diccionario de noticias desde localStorage
    let noticiasCache = localStorage.getItem("noticias");
    if (!noticiasCache) {
        console.error("Error: No se encontraron noticias en localStorage.");
        return; // Detiene la ejecución si no hay datos base
    }

    try {
        noticiasCache = JSON.parse(noticiasCache);
    } catch (e) {
        console.error("Error al parsear JSON de noticias desde localStorage:", e);
        return; // Detiene si los datos están corruptos
    }

    // Referencias a TODOS los contenedores de artículos en index.html
    const generalContainer = document.getElementById("general-articles-container");
    const deportesContainer = document.getElementById("deportes-articles-container");
    const negociosContainer = document.getElementById("negocios-articles-container");
    // --> Añadir selectores para los nuevos contenedores <--
    const nacionalContainer = document.getElementById("nacional-articles-container");
    const tecnologiaContainer = document.getElementById("tecnologia-articles-container");


    // Función auxiliar para renderizar una sección
    const renderizarSeccion = (container, sectionKey) => {
        // Verifica que el contenedor exista en index.html y que haya datos para esa sección
        if (container && noticiasCache[sectionKey]?.articles?.length > 0) {
            console.log(`Renderizando sección en index: ${sectionKey}`);
            container.innerHTML = ''; // Limpiar los placeholders o contenido anterior
            const articles = noticiasCache[sectionKey].articles;
            // Construir el href apuntando a la carpeta html/
            const sectionHref = `html/${noticiasCache[sectionKey].href}`;

            // Limitar a mostrar solo los primeros 3 artículos en el index (puedes ajustar este número)
            const articlesToShow = articles.slice(0, 3); // Tomamos solo los primeros 3

            articlesToShow.forEach((articulo, index) => {
                // Generar el HTML de la tarjeta para este artículo
                // Pasamos el 'index' original para que coincida con el ID en la página de sección
                const originalIndex = articles.findIndex(a => a.title === articulo.title); // Encuentra el índice original
                const tarjetaHtml = generar_html_tarjeta_noticia(articulo, sectionHref, originalIndex !== -1 ? originalIndex : index, sectionKey);
                // Añadir la tarjeta al contenedor
                container.innerHTML += tarjetaHtml;
            });
        } else if (container) {
            // Si el contenedor existe pero no hay artículos, muestra un mensaje
            console.warn(`No se encontraron artículos para la sección en index: ${sectionKey}`);
            container.innerHTML = `<div class="col-12"><p class="text-center text-muted fst-italic">No hay noticias disponibles en esta sección por el momento.</p></div>`;
        } else {
            // Solo advertir si el contenedor no se encuentra en index.html
             if (['general', 'deportes', 'negocios', 'nacional', 'tecnologia'].includes(sectionKey)) {
               console.warn(`Contenedor no encontrado en index.html para la sección: ${sectionKey}`);
             }
        }
    };

    renderizarSeccion(generalContainer, 'general');
    renderizarSeccion(nacionalContainer, 'nacional');   // <-- Nueva llamada
    renderizarSeccion(tecnologiaContainer, 'tecnologia'); // <-- Nueva llamada
    renderizarSeccion(deportesContainer, 'deportes');
    renderizarSeccion(negociosContainer, 'negocios');


    console.log("Renderizado de noticias principal completado.");

}); 