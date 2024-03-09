'use client'

import { useState, useEffect, useContext } from 'react'

import Brand from './Brand'
import Toggler from './Toggler'
import Navigation from './Navigation'
import ContactInfoDesktop from './ContactInfoDesktop'
import ContactInfoMobile from './ContactInfoMobile'
// import { NotificationContext } from '@/contexts/NotificationContext'

import style from './NavbarInner.module.scss'

export default function NavbarInner (props) {
  const [isExpanded, setIsExpanded] = useState(false);
  // const triggerNotification = useContext(NotificationContext);

  useEffect(
    function () {
      window.scrollTo(0, 0);
      document.body.style.overflow = (isExpanded) ? "hidden" : null;
    },
    [isExpanded]
  );

  function copyToClipboard (event) {
    window.navigator.clipboard.writeText(
      event.currentTarget.getAttribute('data-copy')
    );
    
    // triggerNotification ('success', 'Copiado.');
  }

  return (
    <div className={style['navbar-inner']}>
      <Brand
        expanded={isExpanded}
        onClick={() => {setIsExpanded(false)}}
      />
      <Toggler
        expanded={isExpanded ? 'true' : 'false'}
        onClick={() => setIsExpanded(!isExpanded)}
      />
      <div
        className={style['menu']}
        expanded={isExpanded ? 'true' : 'false'}
      >
        <Navigation
          onNav={() => setIsExpanded(false)}
        />
        <ContactInfoDesktop />
        <ContactInfoMobile
          copyToClipboard={copyToClipboard}
        />
      </div>
    </div>
  )
}