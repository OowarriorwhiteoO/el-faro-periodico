const formateador = new Intl.DateTimeFormat('es-CL', {
    year: 'numeric', // año con 4 dígitos
    month: 'long', // mes completo
    day: 'numeric', // día del mes
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
});
const actualizarFecha = () => {
    const fechaFormateada = formateador.format(new Date());
    const labelTime = document.getElementById("label-time")
    labelTime.innerText = fechaFormateada
}

const mostrandoFecha = () => {
    actualizarFecha()
    setTimeout(() => {
        mostrandoFecha()
    }, 1000)
}
mostrandoFecha()