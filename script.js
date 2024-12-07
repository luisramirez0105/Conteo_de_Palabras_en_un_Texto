// Función para contar el número de palabras en un texto
function contarPalabras(texto) {
    // Manejar cadenas vacías
    if (!texto.trim()) return 0; 

    // Dividir el texto en palabras usando el método split()
    const palabras = texto.trim().split(/\s+/); // /\s+/ es una expresión regular que maneja múltiples espacios

    // Devolver el número de palabras
    return palabras.length;
}

// Manejo del evento de envío del formulario
document.getElementById('wordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const texto = document.getElementById('textInput').value; // Obtener el texto ingresado
    const numPalabras = contarPalabras(texto); // Contar las palabras en el texto

    // Mostrar el resultado en el div con id "result"
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `El texto contiene ${numPalabras} palabra(s).`;
});

