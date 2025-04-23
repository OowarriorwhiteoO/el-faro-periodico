# El faro periodico

Proyecto para instituto AIEP.

Daniel Aguila - Edgar Araya - Luis Vilches

# El Faro - Rediseño con Bootstrap 5

Este proyecto corresponde al rediseño del sitio web del periódico "El Faro", desarrollado como parte del Taller de Aplicaciones para Internet de AIEP. El objetivo principal fue modernizar la interfaz, mejorar la organización del contenido, añadir nuevas secciones y funcionalidades interactivas, utilizando **Bootstrap 5** como framework UI principal y **JavaScript** para la interactividad y la carga dinámica de contenido.

## Características Principales

* **Diseño Moderno y Responsivo:** Interfaz actualizada basada en Bootstrap 5, completamente adaptable a dispositivos móviles, tablets y escritorio.
* **Navegación Mejorada:** Barra de navegación (Navbar) responsiva con menú desplegable y enlaces claros a todas las secciones. Footer ampliado con enlaces útiles y botón "Ir Arriba".
* **Nuevas Secciones:** Se añadieron secciones de noticias "Nacional (Chile)" y "Tecnología", además de las existentes (General, Deportes, Negocios).
* **Contenido Dinámico:**
    * Las noticias se cargan desde `localStorage` utilizando JavaScript.
    * El número de artículos se muestra dinámicamente en cada sección.
    * La fecha y hora en el encabezado se actualizan en tiempo real.
* **Componentes Interactivos:**
    * Carrusel en la página principal que muestra las 3 noticias más recientes.
    * Formulario de contacto desplegable (Collapse) para una interfaz más limpia.
    * Efecto visual (hover) en las tarjetas de noticias para mejor retroalimentación al usuario.
    * Formulario para añadir nuevas noticias (simulado con `localStorage`).
* **Organización:** Código fuente estructurado en carpetas (`html`, `css`, `js`, `assets`) para mayor claridad y mantenibilidad.

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
    * Manipulación del DOM
    * Eventos
    * Web Storage API (`localStorage`)
    * `Intl.DateTimeFormat`
* Bootstrap 5.3
* Font Awesome (para iconos)


