'use client';

import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export function NotificationProvider ({ children }) {
  const [notification, setNotification] = useState(
    {
      'isOpen': false,
      'message': '',
      'status': '',
      'timeoutID':  0
    }
  );

  function triggerNotification (status, message) {
    clearTimeout(notification.timeoutID);

    setNotification (
      {
        'isOpen': true,
        'message': message,
        'status': status,
        'timeoutID':  setTimeout (
          closeNotification,
          5000
        )
      }
    );
  }

  function closeNotification () {
    setNotification (
      {
        ...notification,
        'isOpen': false
      }
    );
  }

  const context = {
    ...notification,
    close: closeNotification,
    trigger: triggerNotification
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}