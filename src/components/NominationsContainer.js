import React from 'react';

/**
 * Nominations component
 * contains list of nominated movies
 * @param {array} results
 * @param {string} term
 * @param {function} changeNomination
 *s
 */
const NominationsContainer = ({ nominations, removeNomination }) => {
  return (
    <section className="card nominations">
      <h2>Nominations</h2>
      <ul className="card__list">
        {
          Object.keys(nominations).map((movieId) => (
            <li className="card__list-item" key={movieId}>{`${nominations[movieId].Title} (${nominations[movieId].Year})`}
              <button onClick={() => removeNomination(movieId)}>Remove</button>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default NominationsContainer;