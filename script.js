document.addEventListener('DOMContentLoaded', () => {

    const capitalInput = document.getElementById('capital');

    const interesInput = document.getElementById('interes');

    const aniosInput = document.getElementById('anios');

    const calcularBtn = document.getElementById('calcularBtn');

    const resultadoDiv = document.getElementById('resultado');


    calcularBtn.addEventListener('click', calcularHipoteca);

});