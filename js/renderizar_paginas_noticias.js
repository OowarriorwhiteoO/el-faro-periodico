const generar_html_pagina_general = (section) => {
    let html_articulos = ""
    const background_styles = [
        "bg-beige",
        "bg-light-green"
    ]
    for(let a=0; a < section.articles.length; a++) {
        const articulo = section.articles[a]
        const fecha = new Date(articulo.date).toLocaleDateString()
        html_articulos += `
        <article class="${background_styles[a%2]}">
            <div class="text-center">
                <h2>${articulo.title}</h2>
                <p><strong>Fecha:</strong> ${fecha}</p>
                <img
                src="img/${articulo.img}"
                alt="${articulo["alt-img"]}"
                class="article-img"
                />
                <p>${articulo.description}</p>
            </div>
            ${articulo?.details || ""}
        </article>
        `
    }
    return html_articulos;
}

//Obtiene diccionario de noticias desde el cache
let noticiasCache = localStorage.getItem("noticias")
noticiasCache = JSON.parse(noticiasCache)

//Actualiza página de noticias generales
const pagina_generales = document.getElementById("articles-container-general")
const pagina_negocios = document.getElementById("articles-container-negocios")
const pagina_deportes = document.getElementById("articles-container-deportes")

//Solo renderiza noticias en la pagina actual, si intentamos acceder al elemento
// innerHtml sin estar en la página respectiva dará error
if(pagina_generales) pagina_generales.innerHTML = generar_html_pagina_general(noticiasCache["general"])
if(pagina_negocios) pagina_negocios.innerHTML = generar_html_pagina_general(noticiasCache["negocios"])
if(pagina_deportes) pagina_deportes.innerHTML = generar_html_pagina_general(noticiasCache["deportes"])