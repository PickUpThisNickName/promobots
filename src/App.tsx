import {Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';

function App() {
  return (
    <div className={"min-h-96"}>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
