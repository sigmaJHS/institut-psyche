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
      name: 'Home',
      path: '/',
      view: Home
    },
    {
      name: 'Sobre',
      path: '/sobre',
      view: About
    },
    {
      name: 'Publicações',
      path: '/publicacoes',
      view: Publications
    },
    {
      name: 'Cursos',
      path: '/cursos',
      view: Courses
    },
    {
      name: 'Contato',
      path: '/contato',
      view: Contact
    }
  ];

  return (
    <BrowserRouter basename="/">
      <Navbar routes={navigableRoutes} />
      <Routes>
        {
          navigableRoutes.map(
            function (route, key) {
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={ <route.view /> } />
              );
            }
          )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
