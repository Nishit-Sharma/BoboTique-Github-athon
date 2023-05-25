import AllRoutes from './AllRoutes';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import './components/Global.css';



function App() {

  
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
