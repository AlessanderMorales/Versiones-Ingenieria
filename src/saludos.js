// app.js

document.getElementById('saludarBtn').addEventListener('click', function() {
    const idioma = prompt('¿En qué idioma quieres que te salude? (ES/EN)');
    const nombre = prompt('¿Cuál es tu nombre?');
    const genero = prompt('¿Cuál es tu género? (M/F)');
    const edad = prompt('¿Cuál es tu edad?');
    let saludo;

    if (idioma.toUpperCase() === 'ES') {
        if (genero.toUpperCase() === 'M') {
            saludo = `Hola, señor ${nombre}`;
        } else if (genero.toUpperCase() === 'F') {
            saludo = `Hola, señora ${nombre}`;
        } else {
            saludo = `Hola, ${nombre}`;
        }

        saludo += `, tienes ${edad} años.`;
    } else if (idioma.toUpperCase() === 'EN') {
        if (genero.toUpperCase() === 'M') {
            saludo = `Hello, Mr. ${nombre}`;
        } else if (genero.toUpperCase() === 'F') {
            saludo = `Hello, Ms. ${nombre}`;
        } else {
            saludo = `Hello, ${nombre}`;
        }

        saludo += `, you are ${edad} years old.`;
    } else {
        saludo = 'Idioma no reconocido';
    }

    document.getElementById('mensaje').textContent = saludo;
});
