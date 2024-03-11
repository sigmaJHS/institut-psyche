'use client';

import { useContext } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaRegCopy } from 'react-icons/fa'

import { NotificationContext } from '@/contexts/NotificationContext'

import style from './ContactInfoMobile.module.scss'

export default function ContactInfoMobile () {
  const notification = useContext(NotificationContext);

  function copyToClipboard (event) {
    window.navigator.clipboard.writeText(
      event.currentTarget.getAttribute('data-copy')
    );

    notification.trigger ('success', 'Copiado.');
  }

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
          onClick={copyToClipboard}
          data-copy='(11) 97165-8694'
        >
          <FaRegCopy className={style['icon']} />
        </div>
      </div>
    </div>
  );
}