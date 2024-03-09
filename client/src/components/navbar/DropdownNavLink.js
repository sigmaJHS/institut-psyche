import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { FaCaretDown } from 'react-icons/fa'

import NavLinkText from './NavLinkText.js'

import style from './NavLink.module.scss'

export default function DropdownNavLink (props) {
  const currentPathname = usePathname();
  const dropdownToggle = useRef();

  useEffect(
    function () {
      console.log(currentPathname);
      console.log(currentPathname.startsWith(props.href));
    },
    [currentPathname]
  );

  function handleFocus () {
    if(document.activeElement === dropdownToggle.current) {
      setTimeout(
        function () {
          dropdownToggle.current.blur();
        },
        500
      )
    }
  }

  return (
    <li
      className={`${style['nav-item']} ${style['dropdown-toggle']}`}
      tabIndex='-1'
      ref={dropdownToggle}
      onMouseDown={handleFocus}
    >
      <NavLinkText
        active={(currentPathname.startsWith(props.href)) ? 'true' : 'false'}
      >
        {props.upperName}
        <FaCaretDown className={style['dropdown-icon']} />
      </NavLinkText>
      <ul className={style['dropdown-menu']}>
        {props.children}
      </ul>
    </li>
  );
}