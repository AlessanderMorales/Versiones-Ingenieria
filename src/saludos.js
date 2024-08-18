
document.getElementById('saludarBtn').addEventListener('click', function() {
    const nombre = prompt('¿Cuál es tu nombre?');
    const genero = prompt('¿Cuál es tu género? (M/F)');
    let saludo;

    if (genero.toUpperCase() === 'M') {
        saludo = `Hola, señor ${nombre}`;
    } else if (genero.toUpperCase() === 'F') {
        saludo = `Hola, señora ${nombre}`;
    } else {
        saludo = `Hola, ${nombre}`;
    }

    document.getElementById('mensaje').textContent = saludo;
});
