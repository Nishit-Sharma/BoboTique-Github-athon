
import Home from "./components/Home.js";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './components/Global.css';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" component={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
