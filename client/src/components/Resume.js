import Image from './../components/Image.js'
import Button from './../components/Button.js'
import GoogleMap from './../components/GoogleMap';

import owner from './../assets/marcelo-lopes-psicanalista.jpg'
import freud from './../assets/sigmund-freud.png'
import psychologySymbol from './../assets/simbolo-psicologia.png'
import psyche from './../assets/logotipo-psyche-textless.png'

import style from './Resume.module.scss';

export default function Resume () {
  return (
    <div className='resume'>
      <section id={style['owner']}>
        <div
          className={style['psyche']}
          style={
            {backgroundImage: `url('${psyche}')`}
          }
        />
        <div className='container'>
          <div className={`column ${style['left']}`}>
            <h2 className={style['title']}>Prof. Dr. Marcelo Lopes Rodrigues</h2>
            <p className={style['paragraph']}>Nascido em São Paulo, Capital, em 07 de novembro de 1972, foi criado em Santo André, onde estudou no Instituto Coração de Jesus, formando-se em Patologia Clínica – Nível Técnico em 1990. Em 1991 Forma-se em Enfermagem pelo Colégio ETIP, também em Santo André. Em 1993, mudou-se para Itatiba, interior de São Paulo e vai cursar Farmácia e Bioquímica na Universidade São Francisco em Bragança Paulista.</p>
            <p className={style['paragraph']}>Trabalhou em diversos hospitais da capital e interior de São Paulo até o ano de 2000, quando entra para o curso de Formação em Psicanálise pelo Instituto Brasileiro de Transpsicanálise em São Paulo, concluindo sua formação em 2004. Realiza desde então palestras em todo o Estado de São Paulo e atende em sua clínica localizada em Itatiba/SP. Dirige o Curso de Formação em Psicanálise no Institut Psyché, por ele fundado em 2006. Concluiu seu mestrado em 2012 no International College of Open Courses. Concluiu seu Doutorado em 2013 na Faculdade Teológica de São Paulo.</p>
            <Button>Conheça a equipe completa!</Button>
          </div>
          <div className={`column ${style['right']}`}>
            <div
              className={style['image-holder']}
            >
              <Image
                src={owner}
                alt='Prof. Dr. Marcelo Lopes Rodrigues'
                h-align='center'
              />
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
            <div
              className={style['psychology-symbol']}
              style={
                {backgroundImage: `url('${psychologySymbol}')`}
              }
            />
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
  );
}