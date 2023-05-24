
import Home from "./components/Home.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/Global.css';



function App() {
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </div>
</BrowserRouter>
}

export default App;
