'use client'

import { useState, useEffect } from 'react'

import Brand from './Brand'
import Toggler from './Toggler'
import Navigation from './Navigation'
import ContactInfoDesktop from './ContactInfoDesktop'
import ContactInfoMobile from './ContactInfoMobile'

import style from './NavbarInner.module.scss'

export default function NavbarInner () {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(
    function () {
      window.scrollTo(0, 0);
      document.body.style.overflow = (isExpanded) ? "hidden" : null;
    },
    [isExpanded]
  );

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
        <ContactInfoMobile />
      </div>
    </div>
  )
}