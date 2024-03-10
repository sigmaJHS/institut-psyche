import Link from 'next/link';

import style from './Introduction.module.scss';
import bg from '@/assets/bg.jpg';

export default function Introduction () {
  return (
    <section id={style['intro']}>
      <div
        className={style.background}
        style={{ backgroundImage: `url(${bg.src})` }}
      />
      <div className={style.content}>
        <div className={style.caption}>
          <div className={style.text}>
            <div className={style.quote}>"A Psicanálise é, em essência, uma cura pelo amor"</div>
            <div className={style.author}>- Sigmund Freud</div>
          </div>
          <div className={style.buttons}>
            <button className={style.learn}>
              <Link href='/publicacoes'>Entenda!</Link>
            </button>
            <button className={style.contact}>
              <Link href='/contato'>Nos Encontre</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}