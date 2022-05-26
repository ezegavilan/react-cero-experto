/*
  Funciones
*/

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const greet = name => `Hi, ${name};`

const getUser = () => ({
        uid: 'CX14Q5',
        username: 'neritoo'
});


console.log(saludar('Ezequiel'));
console.log(greet('Ezequiel'));
console.log(getUser());

console.log('');

/*
Para la siguiente función:
Transformar a arrow function
Retornar objeto implícito

function getUsuarioActivo(nombre) {
    return {
        uid: 'PV35Q1',
        username: nombre
    }
}
*/

const getUsuarioActivo = nombre => ({
        uid: 'PV35Q1',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('neritoo');
console.log(usuarioActivo);
