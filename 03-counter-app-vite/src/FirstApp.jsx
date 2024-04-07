import PropTypes from 'prop-types'

// const obj = {
//   nombre: "Fernando",
//   edad: 26,
// };
export function FirstApp({title, subtitle}) {
  return (
    //JSON.stringify(): Transforma el objeto en un json
    <>
      <p> {title} </p>
      <p> {subtitle} </p>
    </>
  );
}


/*
  TAMBIEN SE PUEDE HACER DE ESTA FORMA DEJANDO A LAS PROPS SIN DESESTRUCTURAR
  export function FirstApp(props) {
  return (
    //JSON.stringify(): Transforma el objeto en un json
    <>
      <h1>FirstApp</h1>
      <span> {JSON.stringify(obj)} </span> <br /> 
      <span> {props.title} </span>
      <span> {props.subtitle} </span>
    </>
  );
}
*/

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}
