function calcularCarburante() {

    let reserva = Number(document.getElementById("reserva").value);
    let consumo = Number(document.getElementById("consumo").value);
    let reabastecimiento = Number(document.getElementById("reabastecimiento").value);
    let critico = Number(document.getElementById("critico").value);

    if (
        reserva <= 0 ||
        consumo <= 0 ||
        reabastecimiento < 0 ||
        critico < 0
    ) {
        alert("Ingrese valores válidos");
        return;
    }

    let dias = 0;
    let reservaActual = reserva;

    while (reservaActual > critico) {

        reservaActual =
            reservaActual +
            reabastecimiento -
            consumo;

        dias++;

        if (reservaActual <= 0) {
            break;
        }
    }

    let mensaje;

    if (reservaActual <= 0) {
        mensaje =
            "La reserva se agotará completamente en " +
            dias +
            " días.";
    } else {
        mensaje =
            "La reserva alcanzará el nivel crítico en aproximadamente " +
            dias +
            " días.";
    }

    document.getElementById("resultadoA").innerHTML = `
        <h3>Resultado</h3>
        <p>${mensaje}</p>
        <p>Reserva final: ${reservaActual.toFixed(2)} litros</p>
    `;
}