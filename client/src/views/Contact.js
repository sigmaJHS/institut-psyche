import style from './Contact.module.scss';

import ContactForm from './../components/ContactForm';
import ContactLinks from './../components/ContactLinks';
import GoogleMap from './../components/GoogleMap';

export default function Contact(){

  return(
    <div className={style['contact']}>
      <div className='container'>
        <h1>Contato</h1>
        <div className={style['contact-inner']}>
          <div className={`${style['section']} ${style['links-section']}`}>
            <h2>Saiba onde nos encontrar</h2>
            <ContactLinks className={style['links']} />
            <GoogleMap className={style['map']} />
          </div>
          <div className={`${style['section']} ${style['form-section']}`}>
            <h2>Nos envie uma mensagem</h2>
            <p>Para agendamento de avaliação, informaremos a disponibilidade de horários na resposta.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}