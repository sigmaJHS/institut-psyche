import { NavLink } from 'react-router-dom';

import style from './Footer.module.scss'
import logo from './../assets/institut-psyche-branco.png'

import ContactLinks from './../components/ContactLinks';

export default function Footer () {

  return (
    <div className={style['footer']}>
        <div className={style['footer-inner']}>
          <div className='container'>
            <div className={style['brand']}>
              <NavLink  to='/'>
                <img src={logo} alt='Institut Psyché' />
              </NavLink>
            </div>
            <div className={style['separator']} />
            <ContactLinks
              className={style['links']}
              color='white'
            />
          </div>
        </div>
        <div className={style['footer-bottom']}>
          Desenvolvido por <a href='https://github.com/sigmaJHS'>Gabriel Figueiredo Costa</a>
        </div>
    </div>
  );
}