import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return <h2>slider project setup</h2>;
}

export default App;

// 1) create an useState hook that will access the data array
// 2) create an useState hook that will change the index value derived from the data array; default value will be zero for the initial index value
