import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'

import Home from './views/Home'
import About from './views/About'
import Publications from './views/Publications'
import Courses from './views/Courses'
import Contact from './views/Contact'

function App() {
  
  const navigableRoutes = [
    {
      name: 'Home'
    },
    {
      name: 'Sobre'
    },
    {
      name: 'Contato'
    }
  ];

  return (
    <BrowserRouter basename="/">
      <Navbar routes={navigableRoutes} />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/sobre" element={ <About /> } />
        <Route path="/publicacoes" element={ <Publications /> } />
        <Route path="/cursos" element={ <Courses /> } />
        <Route path="/contato" element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
