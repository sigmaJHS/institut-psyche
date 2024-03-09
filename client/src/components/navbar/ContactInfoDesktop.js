import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

import style from './ContactInfoDesktop.module.scss'

export default function ContactInfoDesktop (prop) {
  return (
    <div className={style['contact-info-desktop']}>
      <ul>
        <li>
          <FaEnvelope className={style['icon']} />
          <a href='mailto:'>institutpsyche@email.com</a>
        </li>
        <li>
          <FaWhatsapp className={style['icon']} />
          <a href='https://wa.me/5511971658694'>(11) 97165-8694</a>
        </li>
        <li>
          <FaPhoneAlt className={style['icon']} />
          <a href='tel:11971658694'>(11) 97165-8694</a>
        </li>
      </ul>
    </div>
  )
}