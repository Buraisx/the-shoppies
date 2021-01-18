import React from 'react';
/**
 * 
 * @param {array} results
 * @param {string} term
 * @param {function} changeNomination
 */
const ResultsContainer = ({ results, term, addNomination, nominations}) => {

  return (
    <section className="card">
      <h2>{term.length > 0 ? `Results for "${term}"`: " Search Results"}</h2>
      <ul>
        {
          results.map((movie) => (
            <li key={movie.imdbID}>{`${movie.Title} (${movie.Year})`}
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