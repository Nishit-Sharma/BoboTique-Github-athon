import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to our shopping website!</h1>
      <p>Choose from our four malls to start shopping:</p>
      <ul>
        <li><a href="#">Mall 1</a></li>
        <li><a href="#">Mall 2</a></li>
        <li><a href="#">Mall 3</a></li>
        <li><a href="#">Mall 4</a></li>
      </ul>
      <form>
        <input type="text" placeholder="Search for products" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;
