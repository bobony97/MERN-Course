/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

test(`Esta prueba no debe fallar`, () => {

    //1.Inicializacion
    const message1 = "Hola Mundo";

    //2.Estimulo 
    const message2 = message1.trim();  //Limpia los espacios

    //3.Observar el comportamiento...esperado
    //expect( message1 ).toBe( message2 );
    expect(message1).toBe(message2);
    
})