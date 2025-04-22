document.getElementById('formulario-nueva-noticia').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita que la página se recarge
    
    const section = event.target.section.value;
    const category = event.target.category.value;
    const title = event.target.title.value;
    const description = event.target.description.value;
    

    //Actualiza diccionario de noticias en cache
    let noticiasCache = localStorage.getItem('noticias');
    noticiasCache = JSON.parse(noticiasCache)
    noticiasCache[section].articles.push({
      "title": title,
      "category": category,
      "description": description,
      "date": new Date().toLocaleDateString(),
      "img": "Logo1.jpeg",
      "alt-img": "Esta noticia fue creada por el usuario."
    }) 
    //actualiza noticias en cache
    localStorage.setItem('noticias', JSON.stringify(noticiasCache))
    alert("¡Noticia creada con éxito!")
    //Se desplaza hasta la sección antes de actualizar
    document.getElementById(section).scrollIntoView();
    location.reload()
  });