import React from 'react';
/**
 * 
 * @param {array} results
 * @param {string} term
 * @param {function} changeNomination
 */
const NominationsContainer = ({ nominations, removeNomination }) => {
  return (
    <section className="card">
      <h2>Nominations</h2>
      <ul>
        {
          Object.keys(nominations).map((movieId) => (
            <li key={movieId}>{`${nominations[movieId].Title} (${nominations[movieId].Year})`}
              <button onClick={() => removeNomination(movieId)}>Remove</button>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default NominationsContainer;