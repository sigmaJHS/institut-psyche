import { NavLink } from 'react-router-dom'

import style from './Card.module.scss'

export default function Card ({ title, date, description, link }) {
  return (
    <div className={ style['card'] }>
      <NavLink to={ link }>
        <div className={ style['title'] }>{ title }</div>
        <div className={ style['date'] }>{ date }</div>
        <p className={ style['description'] }>{ description }</p>
        <div className={ style['link'] }>Continuar lendo...</div>
      </NavLink>
    </div>
  );
}