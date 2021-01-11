const { getImagen } = require("../../base/11-async-await")

describe('La función getImage', () => {
    test('debe retornar el url de la imagen', async () => {
        const url = await getImagen();

        console.log(url);
        expect( url.includes('https://') ).toBe(true);
    })
})