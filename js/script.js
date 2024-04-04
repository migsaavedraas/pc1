// Arreglo de personas y oficios en formato JSON
const personasOficios = [
    { nombre: "Juan", oficio: "Carpintero" },
    { nombre: "María", oficio: "Electricista" },
    { nombre: "Pedro", oficio: "Fontanero" },
    { nombre: "Ana", oficio: "Programadora" }
];

// Obtener el botón "Contratar" y el span para mostrar el nombre de la persona
const contratarBtn = document.getElementById("contratar-btn");
const nombreContratarSpan = document.getElementById("nombre-contratar");

// Agregar un controlador de eventos al botón "Contratar"
contratarBtn.addEventListener("click", () => {
    // Seleccionar una persona al azar para contratar
    const personaContratar = personasOficios[Math.floor(Math.random() * personasOficios.length)];
    // Mostrar el nombre de la persona a contratar en el span
    nombreContratarSpan.textContent = personaContratar.nombre;
    // Imprimir el nombre de la persona a contratar en la consola
    console.log(`Contratando a: ${personaContratar.nombre}`);
});