import { FaPhoneAlt, FaWhatsapp, FaRegCopy } from 'react-icons/fa'

import style from './ContactInfoMobile.module.scss'

export default function ContactInfoMobile (props) {
  return (
    <div className={style['contact-info-mobile']}>
      <div className={style['contact-text']}>(11) 97165-8694</div>
      <div className={style['buttons']}>
        <a
          className={`${style['contact-button']} ${style['regular']}`}
          href='tel:11971658694'
        >
          <FaPhoneAlt className={style['icon']} />
        </a>
        <a
          className={`${style['contact-button']} ${style['altered']}`}
          href='https://wa.me/5511971658694'
        >
          <FaWhatsapp className={style['icon']} />
        </a>
        <div
          className={`${style['contact-button']} ${style['altered']}`}
          onClick={props.copyToClipboard}
          data-copy='(11) 97165-8694'
        >
          <FaRegCopy className={style['icon']} />
        </div>
      </div>
    </div>
  );
}