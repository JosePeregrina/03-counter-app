const { getUser, getUsuarioActivo } = require('../../base/05-funciones');

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    

    expect(user).toEqual(userTest);
  });
  /* test('getUsuarioActivo debe de retornar un objeto', () => {
    const nombre = 'José Luis';

    const userTest = {
      uid: 'ABC567',
      username: nombre,
    };

    const user = getUsuarioActivo(nombre);
    console.log(user);
    expect(user).toEqual(userTest);
  }); */

  test('getUsuarioActivo debe de retonar un onjeto', () => {
      const nombre = 'josé luis';
      const user = getUsuarioActivo(nombre);

      expect(user).toEqual({
          uid: 'ABC567',
          username: nombre
      })
  })
  
});
