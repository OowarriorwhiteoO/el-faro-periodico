/**
 * render-number-articles.js
 *
 * Muestra la cantidad de artículos para cada sección en los elementos span correspondientes.
 * Actualizado para incluir las secciones Nacional y Tecnología.
 */

// Obtiene diccionario de noticias desde el cache
// Usamos un nombre de variable diferente para evitar posibles conflictos si ya está declarada globalmente
let noticias_cache_for_count = localStorage.getItem("noticias");
let parsed_noticias_for_count = null;

if (noticias_cache_for_count) {
    try {
        parsed_noticias_for_count = JSON.parse(noticias_cache_for_count);
    } catch (e) {
        console.error("Error al parsear noticias para conteo:", e);
    }
} else {
    console.error("No se encontraron noticias en localStorage para el conteo.");
}

// Si tenemos datos parseados, procedemos a actualizar los contadores
if (parsed_noticias_for_count) {

    // Selectores para los spans de conteo (existentes y nuevos)
    const articles_number_general = document.getElementById("general-articles-number");
    const articles_number_deportes = document.getElementById("deportes-articles-number");
    const articles_number_negocios = document.getElementById("negocios-articles-number");
    // --> Añadir selectores para los nuevos spans <--
    const articles_number_nacional = document.getElementById("nacional-articles-number");
    const articles_number_tecnologia = document.getElementById("tecnologia-articles-number");

    // Función auxiliar para actualizar un contador si el elemento existe
    const actualizarContador = (elemento, seccionKey) => {
        if (elemento && parsed_noticias_for_count[seccionKey]?.articles) {
            const count = parsed_noticias_for_count[seccionKey].articles.length;
            // Usamos textContent que es ligeramente más eficiente para solo texto
            elemento.textContent = `${count} articulo${count !== 1 ? 's' : ''}`; // Añade 's' solo si no es 1
        } else if (elemento) {
             elemento.textContent = `0 articulos`; // Mostrar 0 si no hay artículos
        }
    };

    // Actualiza contadores para todas las secciones
    actualizarContador(articles_number_general, 'general');
    actualizarContador(articles_number_deportes, 'deportes');
    actualizarContador(articles_number_negocios, 'negocios');
    // --> Añadir llamadas para los nuevos contadores <--
    actualizarContador(articles_number_nacional, 'nacional');
    actualizarContador(articles_number_tecnologia, 'tecnologia');

} // Fin de if (parsed_noticias_for_count)