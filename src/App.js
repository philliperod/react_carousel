import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{title}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

// 1) create an useState hook that will access the data array
// 2) create an useState hook that will change the index value derived from the data array; default value will be zero for the initial index value
// 3) in the jsx. you'll want to iterate over the state value people using the map() method and use destructuring then create a return for the structure of your html tags
// 4) create a variable that will store the class name '____Slide' which we'll create conditions depending on index value and place that person as the active card
// 5) create the first useEffect that which will run in two cases: whether the index changes or the people array changes
// 6) in the first useEffect, first create a const that will equal to the last index of the array
// 7) create conditions in which if the index value is negative, invoke setIndex to the last index value; if value is higher than length of the index, then setIndex to zero
// 8) create a second useEffect for an auto slide functionality that will run whether the index changes
// 9) this will invoke a setInterval function at 3000ms and increase the index value by one; and store it into a variable
// 10) a cleanup function will be created to prevent multiple setInterval counters to run at the same time
// 11) cleanup function will invoke the clearInterval and pass the variable slider
