import { FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'

import style from './Button.module.scss';

export default function Button (props) {
  return (
    <button className={style['button']}>
      <Link href={ props.href }>
        <div className={style['content']}>
          {props.children}
        </div>
        <div className={style['icon']}>
          <FaChevronRight />
        </div>
      </Link>
    </button>
  );
}