import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationContext } from './contexts/NotificationContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notification from './components/Notification'

import { navigableRoutes } from './const/routes'

function App() {
  
  const [notification, setNotification] = useState (
    {
      'isOpen': false,
      'message': '',
      'status': '',
      'timeoutID':  0
    }
  );
  const notificationRef = useRef(null);
  notificationRef.current = notification;

  function closeNotification () {
    setNotification ({...notificationRef.current, 'isOpen': false});
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
        <Navbar />
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
