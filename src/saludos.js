
document.getElementById('saludarBtn').addEventListener('click', function() {
    const nombre = prompt('¿Cuál es tu nombre?');
    document.getElementById('mensaje').textContent = `Hola, ${nombre}`;
});
