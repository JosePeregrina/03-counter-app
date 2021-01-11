import '@testing-library/jest-dom';
const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas en 02-template-strings.js', () => {

    test('getSaludo debe de retornanr Hola + <nombre>!', () => {
        const nombre = 'José Luis';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre+ '!');
        // console.log(saludo);

    })

    // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe de retornar Hola Carlos!, si no hay argumento nombre', () => {
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos!');
        // console.log( saludo );
    })
    

})