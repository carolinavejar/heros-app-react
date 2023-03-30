import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string';
import { getHerosByName } from "../helpers";


export const Search = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)

const heros = getHerosByName(q)

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (evt) => {
    evt.preventDefault();

    if ( searchText.trim().lenght <= 1 ) return; 
    navigate(`?q=${ searchText.toLowerCase().trim() }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit= { onSearchSubmit }>
            <input 
            type="text" 
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value = {searchText}
            onChange= { onInputChange }/>
            
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-5">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            Not hero with <b> { q } </b>
          </div>

          {
            heros.map (hero => (
              <HeroCard key={hero.id} {...hero}  />
            ))
          }
        </div>
      </div>
    </>
  )
}
