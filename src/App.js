
import Home from "./components/Home.js";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './components/Global.css';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={<Home />} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
