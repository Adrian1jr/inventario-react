describe("Pruebas iniciales", () => {
  test("Comparando Mensajes", () => {
    //1.- Iniciazalizacion
    const message1 = "Hola Mundo";
    //2.- Estimulo
    const message2 = message1.trim();
    //3.- Observar el comportamiento
    expect(message1).toBe(message2);
  });
});
