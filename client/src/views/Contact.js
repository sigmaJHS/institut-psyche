import style from './Contact.module.scss';

import ContactForm from './../components/ContactForm.js';

import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaEnvelope, FaHome } from 'react-icons/fa'

export default function Contact(){

  const links = [
    {
      icon: FaPhoneAlt,
      href: 'tel:11971658694',
      text: '(11) 97165-8694'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/5511971658694',
      text: '(11) 97165-8694'
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/institutpsyche/',
      text: '@institutpsyche'
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/institut.psyche.7',
      text: 'Institut Psyché'
    },
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/@institutpsyche8284',
      text: 'Institut Psyché'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:institutpsyche@gmail.com',
      text: 'institutpsyche@gmail.com'
    },
    {
      icon: FaHome,
      href: 'https://www.google.com.br/maps/place/R.+Soares+Muniz,+128+-+Centro,+Itatiba+-+SP,+13250-301/@-23.0034707,-46.8420314,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf2a895a1313b7:0xe0bdb3eea974cc80!8m2!3d-23.0034707!4d-46.8394565!16s%2Fg%2F11cpmdrfyg?entry=ttu',
      text: 'Rua Soares Muniz, 128, Centro, Itatiba/SP'
    }
  ];

  return(
    <div className={style['contact']}>
      <div className='container'>
        <h1>Contato</h1>
        <div className={style['contact-inner']}>
          <div className={`${style['section']} ${style['links-section']}`}>
            <h2>Saiba onde nos encontrar</h2>
            <ul className={style['links']}>
              {
                links.map(
                  function (link, key) {
                    return (
                      <li key={key}>
                        <link.icon className={style['icon']} />
                        <a
                          href={link.href}
                          className={style['anchor']}
                          target='blank'
                        >
                          {link.text}
                        </a>
                      </li>
                    );
                  }
                )
              }
            </ul>
            <iframe
                className={style['map']}
                title='address'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.54738534190255!2d-46.83962808828221!3d-23.003470698467186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2a895a1313b7%3A0xe0bdb3eea974cc80!2sR.%20Soares%20Muniz%2C%20128%20-%20Centro%2C%20Itatiba%20-%20SP%2C%2013250-301!5e0!3m2!1spt-BR!2sbr!4v1692725382081!5m2!1spt-BR!2sbr'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade' />
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