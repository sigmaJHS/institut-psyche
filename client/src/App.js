import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notification from './components/Notification'

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

  const [notification, setNotification] = useState(
    {
      'status': null,
      'message': null
    }
  );

  function handleNotification (status, message) {
    setNotification(
      {
        'status': status,
        'message': message
      }
    );

    setTimeout(
      function () {
        setNotification(
          {
            'status': null,
            'message': null
          }
        );
      },
      5000
    );
  }

  return (
    <BrowserRouter basename="/">
      <Notification
        status={notification.status}
        message={notification.message}
      />
      <Navbar
        routes={navigableRoutes}
        notification={handleNotification}
      />
      <Routes>
        {
          navigableRoutes.map(
            function (route, key) {
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={ <route.view /> }
                />
              );
            }
          )
        }
      </Routes>
      <Footer />     
    </BrowserRouter>
  );
}

export default App;
