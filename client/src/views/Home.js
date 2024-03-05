import { NavLink } from 'react-router-dom';

import Button from './../components/Button.js'
import GoogleMap from './../components/GoogleMap';

import style from './Home.module.scss';
import freud from './../assets/sigmund-freud.png'
import bg from './../assets/bg.jpg';

export default function Home(){
  return(
    <div>
      <section id={style['intro']}>
        <div
          className={style.background}
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className={style.content}>
          <div className={style.caption}>
            <div className={style.text}>
              <div className={style.quote}>"A Psicanálise é, em essência, uma cura pelo amor"</div>
              <div className={style.author}>- Sigmund Freud</div>
            </div>
          <div className={style.buttons}>
            <button className={style.learn}>
              <NavLink to='/publicacoes'>Entenda!</NavLink>
            </button>
            <button className={style.contact}>
              <NavLink to='/contato'>Nos Encontre</NavLink>
            </button>
          </div>
          </div>
        </div>
      </section>
      <section id={style['freud']}>
        <div
          className={style['freud']}
          style={
            {backgroundImage: `url('${freud}')`}
          }
        />
        <div className='container'>
          <div className={style['about-text']}>
            <h2 className={style['title']}>Sobre a Psicanálise</h2>
            <p className={style['paragraph']}>A Psicanálise, fundada pelo médico neurologista Sigmund Freud, hoje é difundida mundialmente. Entretanto, muitas pessoas ainda confundem o que é Psicanálise e o que não é. Por isso, preparamos este texto para que possa ser entendido melhor o significado desse termo.</p>
            <p className={style['paragraph']}>A psicanálise é uma ciência ou campo do saber relacionada à psicologia, mas não é restrita a psicólogos. Há psicanalistas de diversas áreas do saber. Também não se trata de um tipo de terapia da mesma maneira que a psiquiatria e nem pode ser considerada uma área da medicina. Isso porque o psicanalista não é médico e não pode receitar medicamentos. Apesar disso, há muitos psicólogos e psiquiatras que seguem a psicanálise como área principal ou secundária de atuação, além de profissionais de outras áreas como sociologia, educação, artes etc.</p>
            <Button>Continuar lendo</Button>
          </div>
        </div>
      </section>
      <section id={style['map']}>
        <GoogleMap className={style['google_map']} />
      </section>
    </div>
  )
}