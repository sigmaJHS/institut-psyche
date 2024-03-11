'use client';

import {FaCheck, FaTimes, FaExclamation} from 'react-icons/fa'
import { useContext } from 'react';

import { NotificationContext } from '@/contexts/NotificationContext'

import style from './notification.module.scss'

export default function Notification () {
  
  const notification = useContext(NotificationContext);

  let Icon = null;
  if (notification.status === 'success') {
    Icon = FaCheck;
  } else
  if (notification.status === 'error') {
    Icon = FaTimes;
  } else {
    Icon = FaExclamation;
  }

  return (
    <div
      id={style['notification']}
      data-open={(notification.isOpen === true) ? 'true' : 'false'}
    >
      <div
        className={style['close']}
        onClick={() => notification.close()}
      >
        x
      </div>
      <div className={style['notification-inner']}>
        <div
          className={style['status']}
          data-status={notification.status}
        >
          <Icon className={style['icon']} />
        </div>
        <div
          className={style['message']}
        >
          {notification.message}
        </div>
      </div>
    </div>
  );
}