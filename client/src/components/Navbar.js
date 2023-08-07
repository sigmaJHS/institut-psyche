import style from './Navbar.module.scss'

import { useState } from 'react'

function Navbar(){
  const [isExpanded, setIsExpanded] = useState(false);

  const navigableRoutes = [
    {
      name: 'Home'
    },
    {
      name: 'Sobre'
    },
    {
      name: 'Contato'
    }
  ]

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
                navigableRoutes.map(
                  function (route) {
                    return (
                      <li className={style['nav-item']}>{route.name}</li>
                    );
                  }
                )
              }
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Navbar;