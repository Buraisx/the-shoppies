import React from 'react';

const SearchBar = ({queryTerm, term}) => {

  return (
    <section>
      <form>
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