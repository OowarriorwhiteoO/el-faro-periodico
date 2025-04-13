const generar_html_seccion_noticias = (section) => {
    let html_articulos = ""
    for(let a=0; a < section.articles.length; a++) {
        const articulo = section.articles[a]
        html_articulos += `<article>
            <img
                src="img/${articulo.img}"
                alt="${articulo["alt-img"]}"
            />
            <h3>${articulo.category}</h3>
            <h2>
            <a href="${section.href}">${articulo.title}</a>
            </h2>
            <p>${articulo.description}</p>
        </article>`
    }
    return `
        <h2>${section.title} <span id="general-articles-number" class="tiny-text">${section.articles.length} articulo(s)</span></h2>
        <div class="articles">
        ${html_articulos}
        </div>
        `;
}

//Obtiene diccionario de noticias desde el cache
let noticiasCache = localStorage.getItem("noticias")
noticiasCache = JSON.parse(noticiasCache)

//Actualiza secciones de noticias (general, deportes y negocios)
const seccion_generales = document.getElementById("general")
const seccion_deportes = document.getElementById("deportes")
const seccion_negocios = document.getElementById("negocios")


seccion_generales.innerHTML = generar_html_seccion_noticias(noticiasCache["general"])
seccion_deportes.innerHTML = generar_html_seccion_noticias(noticiasCache["deportes"])
seccion_negocios.innerHTML = generar_html_seccion_noticias(noticiasCache["negocios"])