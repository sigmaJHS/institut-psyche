import style from './ContactLinks.module.scss'

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

  return (
    <ul>
      {
        links.map(
          function (link, key) {
            return (
              <li key={key}>
                <link.icon className={style['icon']} />
                <a
                  href={link.href}
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
  )
}