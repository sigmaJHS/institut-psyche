import Button from './../components/Button.js'

import style from './Resume.module.scss'

import freud from './../assets/sigmund-freud.png'

export default function Resume () {
  return (
    <section id={style['freud']}>
      <div
        className={style['freud']}
        style={
          {backgroundImage: `url('${freud.src}')`}
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
  );
}