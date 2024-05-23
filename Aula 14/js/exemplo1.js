let botaoToggle = document.getElementById('botaoToggle');
let elementoParaMostrar = document.getElementById('elementoParaMostrar');

botaoToggle.addEventListener('click', function() {
    if (elementoParaMostrar.style.display === 'none') {
        elementoParaMostrar.style.display = 'block';
    } else {
        elementoParaMostrar.style.display = 'none';
    }
});
