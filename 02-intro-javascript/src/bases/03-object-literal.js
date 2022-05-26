const persona = {
    nombre: 'Ezequiel',
    apellido: 'Gavilán',
    puesto: 'Fullstack Software Developer at Telecom'
}

// Mismo puntero al mismo objeto
// const personaCloned = persona;

// Clonación, nuevo objeto con propia referencia
const personaCloned = {...persona}

personaCloned.nombre = 'Ezequiel Gerardo';

console.log(persona);
console.log(personaCloned);
