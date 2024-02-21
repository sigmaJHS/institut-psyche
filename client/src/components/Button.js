import { FaChevronRight } from 'react-icons/fa'

import style from './Button.module.scss';

export default function Button (props) {
  return (
    <button className={style['button']}>
      <div className={style['content']}>
        {props.children}
      </div>
      <div className={style['icon']}>
        <FaChevronRight />
      </div>
    </button>
  );
}