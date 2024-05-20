function convertir() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadOrigen = document.getElementById('unidadOrigen').value;
    const unidadDestino = document.getElementById('unidadDestino').value;
    let resultado;
    if (unidadOrigen === unidadDestino) {
        resultado = valor;
    } else if (unidadOrigen === 'centimetros' && unidadDestino === 'metros') {
        resultado = valor / 100;
    }
    else if (unidadOrigen === 'metros' && unidadDestino === 'centimetros') {
        resultado = valor * 100;
    }
    else if (unidadOrigen === 'centimetros' && unidadDestino === 'kilometros') {
        resultado = valor / 100000;
    }
    else if (unidadOrigen === 'kilometros' && unidadDestino === 'centimetros') {
        resultado = valor * 100000;
    }
    else if (unidadOrigen === 'metros' && unidadDestino === 'kilometros') {
        resultado = valor / 1000;
    } else if (unidadOrigen === 'kilometros' && unidadDestino === 'metros') {
        resultado = valor * 1000;
    } 
    else if (unidadOrigen === 'gramos' && unidadDestino === 'libras') {
        resultado = valor / 453;
    } else if (unidadOrigen === 'libras' && unidadDestino === 'gramos') {
        resultado = valor * 453;
    } 
    else if (unidadOrigen === 'gramos' && unidadDestino === 'kilos') {
        resultado = valor / 1000;
    } else if (unidadOrigen === 'kilos' && unidadDestino === 'gramos') {
        resultado = valor * 1000;
    } 
    else if (unidadOrigen === 'libras' && unidadDestino === 'kilos') {
        resultado = valor / 2.205;
    } else if (unidadOrigen === 'kilos' && unidadDestino === 'libras') {
        resultado = valor * 2.205;
    } 
    else if (unidadOrigen === 'celsius' && unidadDestino === 'fahrenheit') {
        resultado = (valor * 9 / 5) + 32;
    } else if (unidadOrigen === 'fahrenheit' && unidadDestino === 'celsius') {
        resultado = (valor - 32) * 5 / 9;
    } else {
        resultado = 'Conversión no soportada';
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado} ${unidadDestino}`;
}