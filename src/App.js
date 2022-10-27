import './App.scss';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './shared/components/menu/menu';
import Home from './pages/home/home';
import AboutMeeple from './pages/about-meeple/aboutMeeple';
import News from './pages/news/news';

function App() {
  return (
    <Router>
      <Menu className='menu'></Menu>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />}>          
          </Route>
          <Route path="/about" element={<AboutMeeple /> }>
          </Route>
          <Route path="/news" element={<News /> }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
