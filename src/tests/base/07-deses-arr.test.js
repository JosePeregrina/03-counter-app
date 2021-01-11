const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Haciendo pruebas en 07-deses-arr', () => {
    test('debe de retornar un string y un número', () => {
        const [letras, numero] =  retornaArreglo()
        
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        expect(numero).toBe(123)
        expect(typeof numero).toBe('number')
    })
    
})
