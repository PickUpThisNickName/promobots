import {Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Pages/Home/Home';
import { Products } from './components/Pages/Products/Products';

function App() {
  return (
    <div className={"min-h-96"}>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
