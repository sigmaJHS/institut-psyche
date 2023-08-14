import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaRegCopy } from 'react-icons/fa'

import { useState } from 'react'

import style from './Navbar.module.scss'
import logo from './../assets/institut-psyche.png'

export default function Navbar(props){
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={style['navbar']}>
      <div className='container'>
        <div
          className={style['brand']}
          expanded={isExpanded ? 'true' : 'false'}
        >
          <NavLink to='/' onClick={() => {setIsExpanded(false)}}>
            <img
              src={logo}
              alt="Institut Psyché" />
          </NavLink>
        </div>
        <button
          className={style['toggle']}
          onClick={() => setIsExpanded(!isExpanded)}
          expanded={isExpanded ? 'true' : 'false'}
        >
          <div className={style['line']} />
          <div className={style['line']} />
          <div className={style['line']} />
        </button>
        <div
          className={style['menu']}
          expanded={isExpanded ? 'true' : 'false'}
        >
          <ul className={style['navigation']}>
            {
              props.routes.map(
                function (route, key) {
                  return (
                    <li key={key} className={style['nav-item']}>
                      <NavLink to={route.path} onClick={() => {setIsExpanded(false)}}>
                        {route.name}
                      </NavLink>
                    </li>
                  );
                }
              )
            }
          </ul>
          <div className={style['contact-info']}>
            <div className={style['contact-text']}>(00) 00000-0000</div>
            <div className={style['buttons']}>
              <a
                className={`${style['contact-button']} ${style['regular']}`}
                href='tel:00000000000'
              >
                <FaPhoneAlt className={style['icon']} />
              </a>
              <a
                className={`${style['contact-button']} ${style['altered']}`}
                href='tel:00000000000'
              >
                <FaWhatsapp className={style['icon']} />
              </a>
              <div
                className={`${style['contact-button']} ${style['altered']}`}
                onClick={() => navigator.clipboard.writeText('(00) 00000-0000')}
              >
                <FaRegCopy className={style['icon']} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}