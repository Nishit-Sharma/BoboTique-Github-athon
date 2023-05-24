
import Home from "./components/Home.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Global.css';



function App() {
  <BrowserRouter>
  <div>
    <Routes>
      <Route exact path="/" component={<Home/>} />
    </Routes>
  </div>
</BrowserRouter>
}

export default App;
