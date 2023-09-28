import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationContext } from './contexts/NotificationContext'

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
  
  const [notification, setNotification] = useState (
    {
      'isOpen': false,
      'message': '',
      'status': '',
      'timeoutID':  0
    }
  );

  function closeNotification () {
    setNotification ({...notification, 'isOpen': false});
  }

  function triggerNotification (status, message) {
    clearTimeout(notification.timeoutID);

    setNotification(
      {
        'isOpen': true,
        'status': status,
        'message': message,
        'timeoutID': setTimeout(
          closeNotification,
          5000
        )
      }
    );
  }

  return (
    <BrowserRouter basename="/">
      <NotificationContext.Provider value={triggerNotification}>
        <Notification
          {...notification}
          close={closeNotification}
        />
        <Navbar
          routes={navigableRoutes}
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
      </NotificationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
