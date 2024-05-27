function actualizarUnidadesDestino() {
    const unidadOrigen = document.getElementById('unidadOrigen').value;
    const unidadDestino = document.getElementById('unidadDestino');
    const opciones = ['milimetros', 'centimetros', 'metros', 'kilometros', 'pulgadas', 'pies', 'yardas', 'millas', 'varas'];

    unidadDestino.innerHTML = '';

    opciones.forEach(opcion => {
        if (opcion !== unidadOrigen) {
            const nuevaOpcion = document.createElement('option');
            nuevaOpcion.value = opcion;
            nuevaOpcion.textContent = opcion.charAt(0).toUpperCase() + opcion.slice(1);
            unidadDestino.appendChild(nuevaOpcion);
        }
    });
}

function convertir() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadOrigen = document.getElementById('unidadOrigen').value;
    const unidadDestino = document.getElementById('unidadDestino').value;
    let resultado;

    // Convertir todas las unidades a metros
    let valorEnMetros;
    switch (unidadOrigen) {
        case 'milimetros':
            valorEnMetros = valor / 1000;
            break;
        case 'centimetros':
            valorEnMetros = valor / 100;
            break;
        case 'metros':
            valorEnMetros = valor;
            break;
        case 'kilometros':
            valorEnMetros = valor * 1000;
            break;
        case 'pulgadas':
            valorEnMetros = valor * 0.0254;
            break;
        case 'pies':
            valorEnMetros = valor * 0.3048;
            break;
        case 'yardas':
            valorEnMetros = valor * 0.9144;
            break;
        case 'millas':
            valorEnMetros = valor * 1609.34;
            break;
        case 'varas':
            valorEnMetros = valor * 0.835905;
            break;
        default:
            valorEnMetros = null;
            break;
    }

    // Convertir de metros a la unidad de destino
    switch (unidadDestino) {
        case 'milimetros':
            resultado = valorEnMetros * 1000;
            break;
        case 'centimetros':
            resultado = valorEnMetros * 100;
            break;
        case 'metros':
            resultado = valorEnMetros;
            break;
        case 'kilometros':
            resultado = valorEnMetros / 1000;
            break;
        case 'pulgadas':
            resultado = valorEnMetros / 0.0254;
            break;
        case 'pies':
            resultado = valorEnMetros / 0.3048;
            break;
        case 'yardas':
            resultado = valorEnMetros / 0.9144;
            break;
        case 'millas':
            resultado = valorEnMetros / 1609.34;
            break;
        case 'varas':
            resultado = valorEnMetros / 0.835905;
            break;
        default:
            resultado = 'Conversión no soportada';
            break;
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
