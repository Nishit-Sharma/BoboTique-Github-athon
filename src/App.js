
import Home from "./components/Home.js";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './components/Global.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
