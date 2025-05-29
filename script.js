document.addEventListener('DOMContentLoaded', () => {

    const capitalInput = document.getElementById('capital');

    const interesInput = document.getElementById('interes');

    const aniosInput = document.getElementById('anios');

    const calcularBtn = document.getElementById('calcularBtn');

    const resultadoDiv = document.getElementById('resultado');


    calcularBtn.addEventListener('click', calcularHipoteca);

    function validarInputs() {

        const capital = parseFloat(capitalInput.value);

        const interesAnual = parseFloat(interesInput.value);

        const anios = parseInt(aniosInput.value, 10);


        // Validación del Capital

        if (isNaN(capital) || capital <= 0) {

            resultadoDiv.textContent = 'Error: Por favor, introduce un capital válido (un número mayor que 0).';

            capitalInput.focus();

            return false;

        }


        // Validación del Interés Anual

        if (isNaN(interesAnual) || interesAnual < 0) {

            resultadoDiv.textContent = 'Error: Por favor, introduce un tipo de interés válido (un número no negativo).';

            interesInput.focus();

            return false;

        }


        // Validación de los Años de Amortización

        if (isNaN(anios) || anios <= 0) {

            resultadoDiv.textContent = 'Error: Por favor, introduce un número de años válido (un número entero mayor que 0).';

            aniosInput.focus();

            return false;

        }


        // Si todas las validaciones pasan

        resultadoDiv.textContent = ''; // Limpiar cualquier mensaje de error anterior

        return true;

    }


    function calcularHipoteca() {

        // Llama a la función de validación. Si devuelve false, detiene la ejecución.

        if (!validarInputs()) {

            return;

        }


        // Si la validación pasa, podemos estar seguros de que los valores son números válidos.

        const capital = parseFloat(capitalInput.value);

        const interesAnual = parseFloat(interesInput.value);

        const anios = parseInt(aniosInput.value, 10);


        // Convertir interés anual a interés mensual (decimal)

        const interesMensual = (interesAnual / 100) / 12;

        // Calcular el número total de pagos

        const numeroPagos = anios * 12;


        let cuotaMensual;


        if (interesMensual === 0) {

            // Si el interés es 0, la cuota es simplemente Capital / Número de Pagos

            cuotaMensual = capital / numeroPagos;

        } else {

            // Aplicar la fórmula de la cuota mensual

            const factor = Math.pow(1 + interesMensual, numeroPagos);

            cuotaMensual = capital * (interesMensual * factor) / (factor - 1);

        }


        // Mostrar el resultado, redondeado a dos decimales

        if (isNaN(cuotaMensual) || !isFinite(cuotaMensual)) {

            resultadoDiv.textContent = 'Error: No se pudo calcular la cuota. Revisa los valores introducidos.';

        } else {

            resultadoDiv.textContent = `Cuota Mensual: ${cuotaMensual.toFixed(2)} €`;

        }

    }

});