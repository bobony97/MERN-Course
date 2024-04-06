import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas en el archivo 11-async-await', () => {
  test('Debe retornar el url de la imagen', async() => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe(`string`);
  })
  
})
