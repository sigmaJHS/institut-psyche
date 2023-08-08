import style from './Navbar.module.scss'

import { useState } from 'react'
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'

function Navbar(props){
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={style['navbar']}>
      <div className='container'>
        <div
          className={style['brand']}
          expanded={isExpanded ? 'true' : 'false'}
        >
          <img src="" alt="Institut Psyché" />
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
      </div>
      <div
        className={style['expanded-menu']}
        expanded={isExpanded ? 'true' : 'false'}
      >
          <div className={style['expanded-menu-inner']}>
            <ul className={style['navigation']}>
              {
                props.routes.map(
                  function (route, key) {
                    return (
                      <li key={key} className={style['nav-item']}>{route.name}</li>
                    );
                  }
                )
              }
            </ul>
            <div className={style['contact-info']}>
              <a
                className={`${style['contact-button']} ${style['altered']}`}
                href='tel:00000000000'
              >
                <AiOutlinePhone className={style['icon']} />(00) 00000-0000
              </a>
              <a
                className={`${style['contact-button']} ${style['regular']}`}
                href='tel:00000000000'
              >
                <AiOutlineWhatsApp className={style['icon']} />(00) 00000-0000
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;