import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe(`Pruebas en 05-funciones`, () => {
    test('getUser debe retornar un objeto', () => {
      
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toStrictEqual( user );
    })

    test('getUsuarioActivo deber retornar un objeto', () => {
        const nombre = "Fernando";

        const usuarioActivo = getUsuarioActivo(nombre);

        console.log(`Usuario activo: ${JSON.stringify(usuarioActivo)}`)

        expect( usuarioActivo ).toStrictEqual( {
            uid: 'ABC567',
            username: nombre
        } );
    })
    
    
})