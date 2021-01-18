import React from 'react';

/**
 * Banner Component that displays when there are 5 nominations
 * @param {Object} nominations
 */
const Banner = ({ nominations }) => {
  if(Object.keys(nominations).length >= 5){
    return (
      <section className="card banner">
        <p>5 Nominations have been made!</p>
      </section>
    );
  } else {
    return null;
  }

};

export default Banner;