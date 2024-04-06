import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por ID', () => {
    
    const id = 1;

    const hero = getHeroeById( id );

    console.log(hero);

    expect( hero ).toEqual({id: 1, name: 'Batman', owner: 'DC'})
  })

  test('getHeroeById debe retornar undefined si no existe', () => {
    
    const id = 100;

    const hero = getHeroeById( id );

    console.log(hero);

    expect(hero).toBeFalsy();
  })

  test('Debe retornar un array con los heroes de DC ', () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);
    console.log(heroes);

    expect(heroes.length).toBe(3);  //Evalua que el rango sea 3

    expect(heroes).toEqual( heroes.filter((heroe) => heroe.owner === owner ))
  })

  test('Debe retornar un array con los heroes de Marvel ', () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);
    console.log(heroes);

    expect(heroes.length).toBe(2);  //Evalua que el rango sea 2

    expect(heroes).toEqual( heroes.filter((heroe) => heroe.owner === owner ))
    console.log(heroes);
  })
  
  
})
