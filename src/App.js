import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './shared/components/menu-item/menuItem';
import Home from './pages/home/home';
import AboutMeeple from './pages/about-meeple/aboutMeeple';

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />}>          
        </Route>
        <Route path="/about" element={<AboutMeeple /> }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
