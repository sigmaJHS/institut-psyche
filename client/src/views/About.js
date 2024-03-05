import GoogleMap from './../components/GoogleMap';

import owner from './../assets/marcelo-lopes-psicanalista.jpg'
import psyche from './../assets/logotipo-psyche-textless.png'

import style from './About.module.scss'

export default function About(){
  return(
    <div id={style['about']}>
      <section id={style['owner']}>
        <div
          className={style['psyche']}
          style={
            {backgroundImage: `url('${psyche}')`}
          }
        />
        <h1>Sobre o Institut Psyché</h1>
        <div className='container'>
          <div className={`column ${style['left']}`}>
            <h2 className={style['title']}>Prof. Dr. Marcelo Lopes Rodrigues</h2>
            <p className={style['paragraph']}>Nascido em São Paulo, Capital, em 07 de novembro de 1972, foi criado em Santo André, onde estudou no Instituto Coração de Jesus, formando-se em Patologia Clínica – Nível Técnico em 1990. Em 1991 Forma-se em Enfermagem pelo Colégio ETIP, também em Santo André. Em 1993, mudou-se para Itatiba, interior de São Paulo e vai cursar Farmácia e Bioquímica na Universidade São Francisco em Bragança Paulista.</p>
            <p className={style['paragraph']}>Trabalhou em diversos hospitais da capital e interior de São Paulo até o ano de 2000, quando entra para o curso de Formação em Psicanálise pelo Instituto Brasileiro de Transpsicanálise em São Paulo, concluindo sua formação em 2004. Realiza desde então palestras em todo o Estado de São Paulo e atende em sua clínica localizada em Itatiba/SP. Dirige o Curso de Formação em Psicanálise no Institut Psyché, por ele fundado em 2006. Concluiu seu mestrado em 2012 no International College of Open Courses. Concluiu seu Doutorado em 2013 na Faculdade Teológica de São Paulo.</p>
          </div>
          <div className={`column ${style['right']}`}>
            <img
              src={owner}
              alt='Prof. Dr. Marcelo Lopes Rodrigues'
            />
          </div>
        </div>
      </section>
      <section id={style['map']}>
        <GoogleMap className={style['google_map']} />
      </section>
    </div>
  )
}