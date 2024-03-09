import NavLink from './NavLink.js';
import DropdownNavLink from './DropdownNavLink.js';

import style from './Navigation.module.scss'

export default function Navigation (props) {
  return (
    <ul className={style['navigation']}>
      <NavLink
        href={'/'}
        onClick={props.onNav}
      >
        Home
      </NavLink>
      <NavLink
        href={'/sobre'}
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
          href={'/cursos/formacao_em_psicanalise'}
          onClick={props.onNav}
          isDropdown={true}
        >
          Formação em Psicanálise
        </NavLink>
        <NavLink
          href={'/cursos/projeto_8_semanas'}
          onClick={props.onNav}
          isDropdown={true}
        >
          Projeto 8 Semanas
        </NavLink>
      </DropdownNavLink>
      <NavLink
        href={'/contato'}
        onClick={props.onNav}
      >
        Contato
      </NavLink>
    </ul>
  );
}