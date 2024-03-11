import NavLink from './NavLink.js';
import DropdownNavLink from './DropdownNavLink.js';

import style from './Navigation.module.scss'

export default function Navigation (props) {
  return (
    <ul className={style['navigation']}>
      <NavLink
        href={'/'}
        exactMatch={ true }
        onClick={props.onNav}
      >
        Home
      </NavLink>
      <NavLink
        href={'/sobre'}
        exactMatch={ true }
        onClick={props.onNav}
      >
        Sobre
      </NavLink>
      <NavLink
        href={'/publicacoes'}
        onClick={props.onNav}
      >
        Publicações
      </NavLink>
      <DropdownNavLink
        upperName='Cursos'
        href={'/cursos'}
      >
        <NavLink
          href={'/cursos/formacao-em-psicanalise'}
          exactMatch={ true }
          onClick={props.onNav}
          isDropdown={true}
        >
          Formação em Psicanálise
        </NavLink>
        <NavLink
          href={'/cursos/projeto-8-semanas'}
          exactMatch={ true }
          onClick={props.onNav}
          isDropdown={true}
        >
          Projeto 8 Semanas
        </NavLink>
      </DropdownNavLink>
      <NavLink
        href={'/contato'}
        exactMatch={ true }
        onClick={props.onNav}
      >
        Contato
      </NavLink>
    </ul>
  );
}