// js/noticias.js

const noticias = {
    general: {
        "title": "Noticias Generales",
        "href": "general.html",
        "articles": [
            {
                "title": "Ucrania y Rusia acuerdan un alto al fuego en sus infraestructuras energéticas y en el Mar Negro",
                "category": "Internacional",
                "description": "Información sobre el acuerdo entre Ucrania y Rusia para un cese de hostilidades en áreas específicas.",
                "date": "2024-12-02", // Fecha original como referencia
                "details": `<h3>Puntos clave del acuerdo:</h3><ul><li>Cese inmediato de ataques a instalaciones energéticas en ambos países</li><li>Corredor seguro en el Mar Negro para transporte de granos</li><li>Supervisión internacional del cumplimiento</li><li>Mecanismos de verificación conjunta</li></ul>`,
                "img": "ucrania-rusia.jpg",
                "alt-img": "Bandera de Ucrania y Rusia ondeando"
            },
            {
                "title": "Noticias del terremoto en Myanmar y Tailandia",
                "category": "Internacional",
                "description": "Cobertura del terremoto de magnitud 7.2 que afectó a ambos países, con reportes de daños y rescates.",
                "date": "2024-12-02",
                "details": `<h3>Detalles del sismo:</h3><ul><li>Magnitud 7.2 Richter</li><li>Epicentro en frontera Myanmar-Tailandia</li><li>Reportes de daños estructurales significativos</li><li>Operaciones de rescate en curso</li></ul>`,
                "img": "terremoto.jpg",
                "alt-img": "Edificios dañados por terremoto en Myanmar"
            },
            {
                "title": "Imágenes virales al estilo Ghibli reavivan el debate sobre derechos de autor",
                "category": "Internet",
                "description": "Polémica por el uso de IA para recrear el estilo visual de películas icónicas.",
                "date": "2024-12-02",
                "details": `<h3>Debate sobre IA y Arte:</h3><ul><li>Uso de modelos generativos como Midjourney o Stable Diffusion</li><li>Cuestionamientos sobre la originalidad y el 'prompt engineering'</li><li>Preocupación de artistas por posible reemplazo o devaluación</li><li>Necesidad de legislación sobre obras generadas por IA</li></ul>`,
                "img": "ghibli-ai.jpg",
                "alt-img": "Imágenes generadas por IA al estilo Studio Ghibli"
            }
        ]
    },
    deportes: {
        "title": "Noticias Deportivas",
        "href": "deportes.html",
        "articles": [
             {
                "title": "La 'paliza' con la que amenazó Raphinha la propinó Argentina a Brasil",
                "category": "Fútbol",
                "description": "Argentina derrota 4-1 a Brasil en las eliminatorias mundialistas.",
                "date": "2024-12-02",
                "details": `<h3>Detalles del partido:</h3><ul><li><strong>Confianza de Raphinha:</strong> El jugador brasileño prometió una "paliza" previo al encuentro.</li><li><strong>Goles argentinos:</strong> Julián Álvarez, Enzo Fernández, Alexis Mac Allister y Giovanni Simeone.</li><li><strong>Brasil sin respuestas:</strong> Solo anotó Matheus Cunha tras error defensivo.</li><li><strong>Ausencia clave:</strong> Lionel Messi no jugó por lesión.</li></ul>`,
                "img": "raphinha.jpg",
                "alt-img": "Raphinha (Brasil) en partido contra Argentina"
            },
            {
                "title": "Joseph Blatter y Michel Platini absueltos por tribunal suizo",
                "category": "Fútbol",
                "description": "Absueltos de cargos de corrupción en caso FIFA.",
                "date": "2024-12-02", // Fecha original
                "details": `<h3>Claves del fallo:</h3><ul><li>Pago correspondía a trabajos entre 1998-2002 según defensa.</li><li>Fiscalía no presentó pruebas contundentes.</li><li>Platini perdió oportunidad de presidir la FIFA en 2016.</li><li>Blatter abandonó la presidencia en 2015 por el escándalo.</li></ul>`,
                "img": "fifa-caso.jpg",
                "alt-img": "Joseph Blatter y Michel Platini en tribunal"
            },
             {
                "title": "Sabalenka gana el Miami Open y consolida su liderazgo",
                "category": "Tenis",
                "description": "Victoria en dos sets sobre Jessica Pegula.",
                "date": "2024-12-02", // Fecha original
                "details": `<h3>Logros destacados:</h3><ul><li>Octavo título WTA 1000 de su carrera.</li><li>Refuerza su posición como número 1 del ranking.</li><li>Revierte derrota sufrida en Indian Wells.</li><li>Primera tenista en ganar 3 torneos en 2025.</li></ul>`,
                "img": "Aryna Sabalenka.jpg",
                "alt-img": "Aryna Sabalenka levantando trofeo del Miami Open"
            }
            // Puedes añadir más artículos de deportes aquí si quieres
        ]
    },
    negocios: {
        "title": "Negocios y Emprendimiento",
        "href": "negocios.html",
        "articles": [
             {
                "title": "BCI lanza plan para emprendimiento femenino sostenible",
                "category": "Emprendimiento",
                "description": "Programa con financiamiento y mentorías para proyectos verdes.",
                "date": "2024-12-02", // Fecha original
                "details": `<h3>Características del programa:</h3><ul><li>Financiamiento preferencial para iniciativas verdes</li><li>Mentorías en gestión empresarial</li><li>Red de apoyo entre emprendedoras</li><li>Talleres sobre sostenibilidad</li></ul>`,
                "img": "bci-emprendimiento.jpg",
                "alt-img": "Mujeres presentando proyecto sostenible"
            },
             {
                "title": "Smart Me: Innovación en electromovilidad",
                "category": "Emprendimiento",
                "description": "Startup chilena revoluciona el transporte urbano.",
                "date": "2024-12-02", // Fecha original
                "details": `<h3>Innovaciones clave:</h3><ul><li>Scooters eléctricos de bajo costo</li><li>Sistema de compartir vehículos</li><li>Tecnología de geolocalización</li><li>Expansión a Latinoamérica en 2026</li></ul>`,
                "img": "smart-me.jpg",
                "alt-img": "Scooter eléctrico de Smart Me"
            },
             {
                "title": "Fondo concursable para proyectos colaborativos",
                "category": "Negocios",
                "description": "Hasta $10 millones de financiamiento para iniciativas sociales.",
                "date": "2024-12-02", // Fecha original
                "details": `<h3>Detalles del fondo:</h3><ul><li>Prioridad a proyectos sociales y ecológicos</li><li>Apoyo técnico durante la ejecución</li><li>Postulaciones abiertas hasta junio 2025</li><li>50 proyectos beneficiados a nivel nacional</li></ul>`,
                "img": "fondo-comunitario.jpg",
                "alt-img": "Grupo trabajando en proyecto comunitario"
            }
             // Puedes añadir más artículos de negocios aquí si quieres
        ]
    },
    // ============================
    // === NUEVAS SECCIONES ===
    // ============================
    nacional: {
        "title": "Noticias Nacionales (Chile)",
        "href": "nacional.html", // Nuevo archivo HTML
        "articles": [
            {
                "title": "Gobierno se querellará por Ley Antiterrorista tras atentados en Biobío y Contulmo",
                "category": "Seguridad",
                "description": "Ejecutivo busca responsabilidades por ataques incendiarios en el sur del país.",
                "date": "2025-04-21", // Fecha reciente
                "img": "nacional_ataque_biobio.jpg", // Necesitas esta imagen en assets/img/
                "alt-img": "Maquinaria quemada tras atentado en Biobío",
                "details": "<p>El Ministerio del Interior presentará acciones legales invocando la Ley Antiterrorista para perseguir a los responsables de los recientes ataques incendiarios que afectaron faenas forestales y maquinaria en las regiones del Biobío y La Araucanía.</p>"
            },
            {
                "title": "Matthei confirma que Chile Vamos no realizará primarias presidenciales",
                "category": "Política",
                "description": "Candidata irá directo a primera vuelta, lamentando falta de acuerdo con otros sectores de derecha.",
                "date": "2025-04-21", // Fecha reciente
                "img": "nacional_matthei_primarias.jpg", // Necesitas esta imagen en assets/img/
                "alt-img": "Evelyn Matthei dando declaraciones",
                "details": "<p>La candidata presidencial de Chile Vamos, Evelyn Matthei, anunció que su sector no participará en primarias legales, y competirá directamente en la primera vuelta electoral. Atribuyó la decisión a la negativa de otros candidatos de derecha a participar en el proceso.</p>"
            },
            {
                "title": "Preocupación por llegada de Xilazina o “droga zombie” a Chile",
                "category": "Salud Pública",
                "description": "Autoridades de salud alertan sobre los peligros de esta sustancia más letal que el fentanilo.",
                "date": "2025-04-20", // Fecha reciente
                "img": "nacional_droga_xilazina.jpg", // Necesitas esta imagen en assets/img/
                "alt-img": "Alerta sanitaria por nueva droga peligrosa",
                "details": "<p>El Instituto de Salud Pública (ISP) y el Ministerio de Salud han emitido alertas por la detección de Xilazina, un sedante de uso veterinario, en muestras de drogas ilícitas incautadas en el país. Advierten sobre sus graves efectos en la salud humana.</p>"
            },
            {
                "title": "Nueva ley permitirá derivar pacientes No GES a red privada ante incumplimiento de plazos",
                "category": "Salud",
                "description": "Busca agilizar la atención y garantizar el acceso oportuno a tratamientos fuera del plan Auge.",
                "date": "2025-04-19", // Fecha reciente
                "img": "nacional_ley_ges.jpg", // Necesitas esta imagen en assets/img/
                "alt-img": "Persona siendo atendida en centro de salud",
                "details": "<p>El Congreso despachó la ley que establece que si un prestador público no cumple con los plazos máximos de atención para patologías No GES, el paciente podrá ser derivado a un prestador privado sin costo adicional, con el objetivo de reducir las listas de espera.</p>"
            }
        ]
    },
    tecnologia: {
        "title": "Tecnología",
        "href": "tecnologia.html", // Nuevo archivo HTML
        "articles": [
            {
                "title": "OpenAI lanza O3 y O4-mini: nuevos modelos con capacidades de razonamiento mejoradas",
                "category": "Inteligencia Artificial",
                "description": "La compañía busca mantener el liderazgo en IA con versiones más potentes y eficientes para tareas complejas.",
                "date": "2025-04-21", // Fecha reciente
                "img": "tec_openai_o3.jpg", // Necesitas esta imagen en assets/img/
                "alt-img": "Logo de OpenAI con nodos de red neuronal",
                "details": "<p>OpenAI presentó sus nuevos modelos O3 y O4-mini, destacando mejoras significativas en razonamiento lógico, matemáticas y codificación, además de mayor eficiencia en costos y velocidad de respuesta para competir en el mercado de la IA.</p>"
            },
            {
                "title": "TSMC fabricará sus chips más avanzados en EE.UU., pese a costos mayores",
                "category": "Semiconductores",
                "description": "La empresa taiwanesa responde a presiones geopolíticas e invierte fuertemente en plantas en Arizona.",
                "date": "2025-04-20", // Fecha reciente
                "img": "tec_tsmc_eeuu.jpg", // Necesitas esta imagen en assets/img/
                "alt-img": "Planta de fabricación de chips de TSMC",
                "details": "<p>Confirmando un acuerdo con el gobierno estadounidense, TSMC construirá una tercera planta en Arizona para producir chips de 2nm y tecnologías más avanzadas, diversificando su producción fuera de Taiwán a pesar de los desafíos logísticos y de costos.</p>"
            },
            {
                "title": "Spotify sufre caída global y se investiga posible ciberataque",
                "category": "Ciberseguridad",
                "description": "Millones de usuarios afectados por interrupción del servicio de streaming musical durante varias horas.",
                "date": "2025-04-19", // Fecha reciente
                "img": "tec_spotify_caida.jpg", // Necesitas esta imagen en assets/img/
                "alt-img": "Logo de Spotify con señal de error",
                "details": "<p>El popular servicio de música Spotify experimentó una interrupción a nivel mundial que afectó tanto a la aplicación móvil como a la versión web. La compañía investiga las causas, sin descartar un posible ciberataque como origen del problema.</p>"
            },
            {
                "title": "Robot humanoide chino Tiangong completa media maratón en entorno urbano real",
                "category": "Robótica",
                "description": "Hito en robótica demuestra avances significativos en movilidad, equilibrio y autonomía de robots bípedos.",
                "date": "2025-04-18", // Fecha reciente
                "img": "tec_robot_maraton.jpg", // Necesitas esta imagen en assets/img/
                "alt-img": "Robot humanoide Tiangong corriendo",
                "details": "<p>El robot Tiangong, desarrollado en China, logró completar una media maratón (21 km) en un evento público, mostrando su capacidad para navegar entornos complejos y mantener el equilibrio durante un período prolongado, marcando un avance para la robótica humanoide.</p>"
            }
        ]
    }
};

// --- Código existente para guardar en localStorage ---
// Verificar diccionario de noticias en cache
const dic_noticias_existente = localStorage.getItem('noticias');
// Forzar la actualización con las nuevas secciones siempre al cargar esta versión del script.
// Si no quieres forzarla, comenta la siguiente línea.
console.log("Actualizando/Guardando noticias con nuevas secciones en localStorage...");
localStorage.setItem('noticias', JSON.stringify(noticias));

// Código original para verificar si existía (opcional mantenerlo o simplificar como arriba)
/*
if (!dic_noticias_existente) {
    // Si el diccionario de noticias no está definido en el cache, entonces lo define
    console.log("Guardando noticias iniciales en localStorage...");
    localStorage.setItem('noticias', JSON.stringify(noticias));
} else {
    // Opcional: Podrías añadir lógica aquí para actualizar las noticias si ya existen
    // Por ahora, simplemente las usa si existen o las crea si no.
     console.log("Usando noticias desde localStorage.");
     // Para forzar la actualización con las nuevas secciones si ya tenías datos viejos:
     // localStorage.setItem('noticias', JSON.stringify(noticias));
}
*/