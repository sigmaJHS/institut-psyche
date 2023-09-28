import style from './Notification.module.scss'

import {FaCheck, FaTimes, FaExclamation} from 'react-icons/fa'

export default function Notification (props) {

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
      id={style['notification']}
      data-open={(props.isOpen === true) ? 'true' : 'false'}
    >
      <div
        className={style['close']}
        onClick={() => props.close()}
      >
        x
      </div>
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