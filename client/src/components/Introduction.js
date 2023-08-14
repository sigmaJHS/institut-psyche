import { NavLink } from 'react-router-dom';

import style from './Introduction.module.scss';
import bg from './../assets/bg.jpg';

export default function Introduction () {
  return (
    <div className={style.intro}>
      <div
        className={style.background}
        style={{ backgroundImage: `url(${bg})` }} />
      <div className={style.content}>
        <div className={style.caption}>
          <div className={style.text}>
            <div className={style.quote}>"A psicanálise é, em essência, uma cura pelo amor"</div>
            <div className={style.author}>- Sigmund Freud</div>
          </div>
        <div className={style.buttons}>
          <button className={style.learn}>
            <NavLink to='/publicacoes'>Entenda!</NavLink>
          </button>
          <button className={style.contact}>
            <NavLink to='/contato'>Entre em contato</NavLink>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};