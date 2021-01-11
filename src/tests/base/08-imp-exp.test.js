import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById( id )

        const heroeData = heroes.find(h => h.id === id)

        expect( heroe ).toEqual( heroeData );
    });
    test('debe retornar un undefined si Héroe no existe', () => {
        const id = 10;
        const hero = getHeroeById( id );

        expect( hero ).toBe(undefined)
    })

    // debe retornar un arreglo con los héroes de DC
    // owner
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los héroes de Marvel
    // lentgth = 2 // toBe

    test('debe retornar un arreglo con los héroes de Dc', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === owner );

        expect( heroe ).toEqual(heroeData);
    })
    
    test('debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );

        expect( heroe.length ).toBe( 2 );
    })
    
    
})
