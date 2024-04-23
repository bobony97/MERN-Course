import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);

  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const onSearchSubmit = (event) => {
    event.preventDefault(); 
    navigate(`?q=${ searchText }`);           //Esto invia la query o el texto ingresado al input del formulario directo a la url
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>

          <form onSubmit={ onSearchSubmit } >
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
          </form>

          <button className="btn btn-outline-primary mt-2">Search</button>
        </div>

        <div className="col-7">
          <h4>Results</h4>

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
            No hero with: {q}
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  );
};
