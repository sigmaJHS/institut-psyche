import Link from 'next/link';

import logo from '@/assets/institut-psyche.png'
import style from './Brand.module.scss'

export default function Brand (props) {
  return (
    <div
        className={style['brand']}
        expanded={props.expanded ? 'true' : 'false'}
      >
        <Link
          href='/'
          onClick={props.onClick}
        >
          <img
            src={logo.src}
            alt="Institut Psyché"
          />
        </Link>
      </div>
  );
}