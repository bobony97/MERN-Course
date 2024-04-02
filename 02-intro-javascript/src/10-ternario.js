const activo = true;

let mensaje = ( activo ) ? "activo" : "inactivo";  //De esta forma el ternario espera ambas condiciones a evaluar

console.log(mensaje);

mensaje = activo && "activo"   //De esta otra solo evalua la primera condicion (si "activo === true"), ejecuta la condicion (mensaje "activo")

