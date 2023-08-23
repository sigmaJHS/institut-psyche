import { NavLink } from 'react-router-dom';

import style from './Footer.module.scss'
import logo from './../assets/institut-psyche.png'

import links from './../const/links'

import ContactLinks from './../components/ContactLinks';

export default function Footer () {

  const footerTopSocialLinks = ['whatsapp', 'instagram', 'facebook', 'youtube'];
  const footerInnerSocialLinks = ['phone', 'email', 'address'];

  return (
    <div className={style['footer']}>
        <div className={style['footer-top']}>
          {
            links.map(
              function (link, key) {
                return (footerTopSocialLinks.includes(link.name))
                ? (
                  <div key={key} className={style['social-button']}>
                    <a href={link.href}>
                      <link.icon className={style['icon']} />
                    </a>
                  </div>
                )
                : null
              }
            )
          }
        </div>
        <div className={style['footer-inner']}>
          <div class='container'>
            <div className={style['brand']}>
              <NavLink  to='/'>
                <img src={logo} alt='Institut Psyché' />
              </NavLink>
            </div>
            <ContactLinks
              className={style['links']}
              include={footerInnerSocialLinks}
            />
          </div>
        </div>
        <div className={style['footer-bottom']}>
          Desenvolvido por <a href='https://github.com/sigmaJHS'>Gabriel Figueiredo Costa</a>
        </div>
    </div>
  );
}