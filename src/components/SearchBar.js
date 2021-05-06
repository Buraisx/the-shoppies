import React from 'react';

/**
 * Live search bar component that queries OMDB on input change
 * @param {function} queryTerm - function that queries the term
 * @param {string} term - search term in input box
 */
const SearchBar = ({queryTerm, term}) => {

  return (
    <section className="card search-bar">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search-term">Movie title</label>
        <div className="search-bar__container">
          <button type="submit" className="search-bar__submit"></button>
          <input
            id="search-term"
            name="search-term"
            value={term}
            type="text"
            className="search-bar__input"
            placeholder="Please enter a title"
            onChange={e => queryTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;