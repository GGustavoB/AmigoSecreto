let amigos = [];

// Función para agregar un amigo
const agregarAmigo = () => {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        mostrarAlerta("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
};

// Función para actualizar la lista de amigos en pantalla
const actualizarLista = () => {
    const listaAmigosUl = document.getElementById("listaAmigos");
    listaAmigosUl.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigosUl.appendChild(li);
    });
};

// Función para sortear un amigo
const sortearAmigo = () => {
    if (amigos.length === 0) {
        mostrarAlerta("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    mostrarResultado(amigoSorteado);
};

// Función para mostrar el resultado del sorteo
const mostrarResultado = (amigo) => {
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li class="resultado-destacado">${amigo}</li>`;
};

// Función para mostrar alertas de manera uniforme
const mostrarAlerta = (mensaje) => {
    alert(mensaje);
};

// Evento DOMContentLoaded para conectar los botones
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});
