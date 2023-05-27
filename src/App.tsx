import {Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
