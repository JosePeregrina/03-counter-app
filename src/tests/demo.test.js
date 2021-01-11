describe('Pruebas en el archivo demo.test.js', () => {
  test('debe de ser iguales los string', () => {
    // 1. Inicialización
    const mensaje = 'Hola Mundo';

    // 2. Estimulo
    const mensaje2 = `Hola Mundo`;

    // 3. Obserbar el comportamiento
    expect(mensaje).toBe(mensaje2); // ===
  });
});
