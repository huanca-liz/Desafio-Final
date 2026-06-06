function calcularAlimentos() {

    let producto =
        document.getElementById("producto").value;

    let precioAnterior =
        Number(document.getElementById("precioAnterior").value);

    let precioActual =
        Number(document.getElementById("precioActual").value);

    let cantidad =
        Number(document.getElementById("cantidad").value);

    if (
        producto === "" ||
        precioAnterior <= 0 ||
        precioActual <= 0 ||
        cantidad <= 0
    ) {
        alert("Complete todos los campos.");
        return;
    }

    let gastoAnterior =
        precioAnterior * cantidad;

    let gastoActual =
        precioActual * cantidad;

    let diferencia =
        gastoActual - gastoAnterior;

    let porcentaje =
        ((precioActual - precioAnterior) /
            precioAnterior) * 100;

    document.getElementById("resultadoB").innerHTML = `
        <h3>${producto}</h3>

        <p><strong>Gasto anterior:</strong>
        Bs ${gastoAnterior.toFixed(2)}</p>

        <p><strong>Gasto actual:</strong>
        Bs ${gastoActual.toFixed(2)}</p>

        <p><strong>Diferencia:</strong>
        Bs ${diferencia.toFixed(2)}</p>

        <p><strong>Aumento:</strong>
        ${porcentaje.toFixed(2)}%</p>
    `;
}