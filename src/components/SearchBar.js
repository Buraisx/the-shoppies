import React from 'react';

/**
 * Live search bar component that queries OMDB on input change
 * @param {function} queryTerm - function that queries the term
 * @param {string} term - search term in input box
 */
const SearchBar = ({queryTerm, term}) => {

  return (
    <section className="card">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search-term">Movie title</label>
        <input
          id="search-term"
          name="search-term"
          value={term}
          type="text"
          onChange={e => queryTerm(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchBar;