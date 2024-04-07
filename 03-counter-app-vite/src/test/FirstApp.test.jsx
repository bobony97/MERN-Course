import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en componente <FirstApp />', () => {
  test('Debe hacer match con el snapshot ', () => {
    
    const title = "First App"
    const subTitle = 123;
    render( <FirstApp  title={ title } subtitle={ subTitle } /> )   //Renderiza el componente en memoria

  })
  
})
