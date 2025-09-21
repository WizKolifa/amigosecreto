// Este array almacena todos los nombres de los amigos.
let amigos = [];

/**
 * Agrega un amigo a la lista.
 * Captura el nombre del campo de texto, lo valida y lo añade al array de amigos.
 */
function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim();

    // Validar que el campo no esté vacío.
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar si el nombre ya existe para evitar duplicados.
    if (amigos.includes(nombre)) {
        alert("Este nombre ya se encuentra en la lista.");
        return;
    }

    // Añadir el nombre al array y limpiar el campo de entrada.
    amigos.push(nombre);
    amigoInput.value = '';
    mostrarListaAmigos();
}

/**
 * Muestra la lista de amigos en la interfaz.
 * Actualiza la lista HTML con los nombres del array.
 */
function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

/**
 * Realiza el sorteo de Amigo Secreto.
 * Asigna un amigo secreto a cada persona en la lista.
 */
function sortearAmigo() {
    // Validar que haya suficientes amigos para el sorteo.
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos amigos para el sorteo.");
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    // Crear una copia del array para no modificar el original.
    let amigosCopia = [...amigos];
    
    // Mezclar el array de forma aleatoria para el sorteo.
    for (let i = amigosCopia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosCopia[i], amigosCopia[j]] = [amigosCopia[j], amigosCopia[i]];
    }

    // Asignar el amigo secreto a cada persona.
    for (let i = 0; i < amigosCopia.length; i++) {
        let amigoActual = amigosCopia[i];
        let amigoAsignado = amigosCopia[(i + 1) % amigosCopia.length];
        
        let listItem = document.createElement('li');
        listItem.textContent = `${amigoActual} le regala a ${amigoAsignado}`;
        resultado.appendChild(listItem);
    }
}

// Vinculación de funciones a los botones del HTML
document.getElementById('añadir').addEventListener('click', agregarAmigo);
document.getElementById('sortearAmigo').addEventListener('click', sortearAmigo);