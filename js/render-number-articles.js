//Obtiene diccionario de noticias desde el cache
let noticias_cache_articles = localStorage.getItem("noticias")
noticias_cache_articles = JSON.parse(noticias_cache_articles)

//Actualiza secciones de noticias (general, deportes y negocios)
const articles_number_general = document.getElementById("general-articles-number")
const articles_number_deportes = document.getElementById("deportes-articles-number")
const articles_number_negocios = document.getElementById("negocios-articles-number")


if(articles_number_general) articles_number_general.innerHTML = `${noticias_cache_articles["general"].articles.length} articulo(s)`
if(articles_number_deportes) articles_number_deportes.innerHTML = `${noticias_cache_articles["deportes"].articles.length} articulo(s)`
if(articles_number_negocios) articles_number_negocios.innerHTML = `${noticias_cache_articles["negocios"].articles.length} articulo(s)`