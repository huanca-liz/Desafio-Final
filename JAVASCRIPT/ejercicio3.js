function calcularCompras() {

    let presupuesto =
        Number(document.getElementById("presupuesto").value);

    let precio =
        Number(document.getElementById("precioProducto").value);

    let cantidad =
        Number(document.getElementById("cantidadProducto").value);

    if (
        presupuesto <= 0 ||
        precio <= 0 ||
        cantidad <= 0
    ) {
        alert("Ingrese valores válidos.");
        return;
    }

    let total =
        precio * cantidad;

    let resultado = "";

    if (total <= presupuesto) {

        let saldo =
            presupuesto - total;

        resultado = `
            <h3>Resultado</h3>

            <p><strong>Total de compra:</strong>
            Bs ${total.toFixed(2)}</p>

            <p><strong>Saldo restante:</strong>
            Bs ${saldo.toFixed(2)}</p>

            <p style="color:green;">
            El presupuesto alcanza para la compra.
            </p>
        `;

    } else {

        let faltante =
            total - presupuesto;

        resultado = `
            <h3>Resultado</h3>

            <p><strong>Total de compra:</strong>
            Bs ${total.toFixed(2)}</p>

            <p><strong>Falta:</strong>
            Bs ${faltante.toFixed(2)}</p>

            <p style="color:red;">
            El presupuesto NO alcanza.
            </p>
        `;
    }

    document.getElementById("resultadoD").innerHTML =
        resultado;
}