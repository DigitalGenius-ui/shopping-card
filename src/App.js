import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import CardDetail from './pages/CardDetail';
import Homepage from "./pages/Homepage";
import ProductsDetiles from './pages/ProductsDetiles';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Alert />
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/detail/:id" element={<ProductsDetiles/>}/>
            <Route exact path="/card" element={<CardDetail/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
