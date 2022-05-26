/*
  Destructuring (Asignación Desestructurante)
*/

const tony = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Engineer'
}

const getPersona = (persona) => {
    const { nombre, edad, clave } = persona;

    console.log(nombre);
    console.log(edad);
    console.log(clave);
}

// También se puede hacer dentro del argumento

const getAvenger = ({nombre, edad, clave, rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        age: edad,
        coord: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

getPersona(tony);
console.log('');
const {nombreClave, age, coord: {lat, lng}} = getAvenger(tony);
console.log(lat, lng);
