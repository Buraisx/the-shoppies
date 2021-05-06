import React from 'react';

/**
 * 
 * Search results component
 * Displays list of movies
 * @param {array} results
 * @param {string} term
 * @param {function} changeNomination
 * 
 */
const ResultsContainer = ({ results, term, addNomination, nominations, isLoading}) => {
  return (
    <section className="card results">
      <h2 className="card__title">{term.length > 0 ? `Results for "${term}"`: " Search Results"}</h2>
      {
        isLoading ? <div className="spinner"></div> : null
      }
      <ul className="card__list">
        {
          results.map((movie) => (
            <li className="card__list-item" key={movie.imdbID}>{`${movie.Title} (${movie.Year})`}
              <button 
                onClick={() => addNomination(movie)}
                className={movie.imdbID in nominations ? "disabled" : ""}
              >
                  Nominate
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default ResultsContainer;