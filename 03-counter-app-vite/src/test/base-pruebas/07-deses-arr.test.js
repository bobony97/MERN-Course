import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe(`Esta test es sobre 07-deses-arr`, () => {
    test('Este test debe retornar un string y un numero', () => {
      
        const [letters, numbers] = retornaArreglo();  //Desestructuracion del array

        expect( letters ).toBe( "ABC" );  //toBe tambien evalua el tipo de dato
        expect( numbers ).toBe( 123 ); 

        expect( typeof letters ).toBe( `string` );
        expect( typeof numbers ).toBe( `number` );

        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );
    })
    
})