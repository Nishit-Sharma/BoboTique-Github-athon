import Routes from './AnimatedRoutes';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import './components/Global.css';



function App() {

  
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
