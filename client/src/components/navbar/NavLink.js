import { usePathname } from 'next/navigation'
import Link from 'next/link';

import NavLinkText from './NavLinkText.js'

import style from './NavLink.module.scss'

export default function NavLink (props) {
  const currentPathname = usePathname();

  function isActive () {
    return (props.exactMatch === true)
      ? (currentPathname === props.href)
      : (currentPathname.startsWith(props.href))
  }

  return (
    <li
      className={(props.isDropdown) ? style['dropdown-item'] : style['nav-item'] }
    >
      <Link
        href={props.href}
        onClick={props.onClick}
      >
        <NavLinkText
          active={(isActive()) ? 'true' : 'false'}
        >
          {props.children}
        </NavLinkText>
      </Link>
    </li>
  );
}