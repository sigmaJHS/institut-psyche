import { FaCaretDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaRegCopy } from 'react-icons/fa'

import { useState, useEffect, useContext, useRef } from 'react'
import { NotificationContext } from './../contexts/NotificationContext'

import style from './Navbar.module.scss'
import logo from './../assets/institut-psyche.png'

import { navigableRoutes } from './../const/routes'

export default function Navbar(props){
  const triggerNotification = useContext(NotificationContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownToggle = useRef();

  function handleFocus (event) {
    if(document.activeElement === dropdownToggle.current) {
      setTimeout(
        function () {
          dropdownToggle.current.blur();
        },
        500
      )
    }
  }

  useEffect(
    function () {
      window.scrollTo(0, 0);
      document.body.style.overflow = (isExpanded) ? "hidden" : null;
    },
    [isExpanded]
  );

  function copyToClipboard (event) {
    window.navigator.clipboard.writeText(
      event.target.getAttribute('data-copy')
    );
    
    triggerNotification ('success', 'Copiado.');
  }

  return (
    <div className={style['navbar']}>
      <div className='container'>
        <div className={style['navbar-inner']}>
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
                navigableRoutes.map(
                  function (route) {
                    if(Object.hasOwn(route, 'children')) {
                      return (
                        <li
                          key={route.id}
                          className={`${style['nav-item']} ${style['dropdown-toggle']}`}
                          tabIndex='-1'
                          onMouseDown={handleFocus}
                          ref={dropdownToggle}
                        >
                          <div className={style['text']}>
                            {route.name}
                            <FaCaretDown className={style['dropdown-icon']} />
                          </div>
                          <ul className={style['dropdown-menu']}>
                            {
                              route.children.map(
                                function(childRoute) {
                                  return (
                                    <li
                                      key={childRoute.id}
                                      className={style['dropdown-item']}
                                    >
                                      <NavLink to={childRoute.path} onClick={() => {setIsExpanded(false)}}>
                                        {childRoute.name}
                                      </NavLink>
                                    </li>
                                  )
                                }
                              )
                            }
                          </ul>
                        </li>
                      );
                    }else{
                      return (
                        <li
                          key={route.id}
                          className={style['nav-item']}
                        >
                          <NavLink to={route.path} onClick={() => {setIsExpanded(false)}}>
                            <div className={style['text']}>
                              {route.name}
                            </div>
                          </NavLink>
                        </li>
                      );
                    }
                  }
                )
              }
            </ul>
            <div className={style['contact-info-desktop']}>
              <ul>
                <li>
                  <FaEnvelope className={style['icon']} />
                  <a href='mailto:'>institutpsyche@email.com</a>
                </li>
                <li>
                  <FaWhatsapp className={style['icon']} />
                  <a href='https://wa.me/5511971658694'>(11) 97165-8694</a>
                </li>
                <li>
                  <FaPhoneAlt className={style['icon']} />
                  <a href='tel:11971658694'>(11) 97165-8694</a>
                </li>
              </ul>
            </div>
            <div className={style['contact-info-mobile']}>
              <div className={style['contact-text']}>(11) 97165-8694</div>
              <div className={style['buttons']}>
                <a
                  className={`${style['contact-button']} ${style['regular']}`}
                  href='tel:11971658694'
                >
                  <FaPhoneAlt className={style['icon']} />
                </a>
                <a
                  className={`${style['contact-button']} ${style['altered']}`}
                  href='https://wa.me/5511971658694'
                >
                  <FaWhatsapp className={style['icon']} />
                </a>
                <div
                  className={`${style['contact-button']} ${style['altered']}`}
                  onClick={copyToClipboard}
                  data-copy='(11) 97165-8694'
                >
                  <FaRegCopy className={style['icon']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}