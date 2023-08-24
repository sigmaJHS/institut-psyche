import { useState, useEffect } from 'react';
import style from './Notification.module.scss'

import {FaCheck, FaTimes, FaExclamation} from 'react-icons/fa'

export default function Notification (props) {

  const [open, setOpen] = useState(false);

  useEffect (
    function () {
      setOpen(props.status !== null);
    },
    [props.status]
  )

  let Icon = null;
  if (props.status === 'success') {
    Icon = FaCheck;
  } else
  if (props.status === 'error') {
    Icon = FaTimes;
  } else {
    Icon = FaExclamation;
  }

  return (
    <div
      className={style['notification']}
      data-open={open}
    >
      <div className={style['notification-inner']}>
        <div
          className={style['status']}
          data-status={props.status}
        >
          <Icon className={style['icon']} />
        </div>
        <div
          className={style['message']}
        >
          {props.message}
        </div>
      </div>
    </div>
  );
}