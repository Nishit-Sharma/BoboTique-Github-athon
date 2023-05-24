import React, { useState } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Store1 from './components/Store1/Store1';

const App = () => {
  const [showStore1, setShowStore1] = useState(true);

  const handleHomeClick = () => {
    setShowStore1(false);
  };

  return (
    <div>
      <Header onHomeClick={handleHomeClick} />
      {showStore1 ? <Store1 /> : <Home />}
    </div>
  );
};

export default App;
