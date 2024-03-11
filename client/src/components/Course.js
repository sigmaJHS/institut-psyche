import Image from '@/components/Image'
import style from './Course.module.scss'

import hotmart from '@/assets/hotmart.png'
import sympla from '@/assets/sympla.png'

export default function Course (props) {
  return (
    <div id={style['course']}>
      <div className={`${style['title']} mobile`}>
        <div className='container'>
          <h1>{props.title}</h1>
          <h4>{props.date}</h4>
        </div>
      </div>
      <div className={style['header']}>
        <div 
          className={style['bg']}
          style={{backgroundImage: `url(${props.image})`}}
        />
        <Image
          className={style['image']}
          src={ props.image }
          alt={ props.image }
          h-align='center'
        />
      </div>
      <div className='container'>
        <div className={style['content']}>
          <div className={style['links']}>
            <h2>Acesse em:</h2>
            <a
              href={props.sympla_link}
              className={`${style['button']} ${style['sympla']}`}
            >
              <img
                src={sympla.src}
                alt={'sympla'}
              />
            </a>
            <a
              href={props.hotmart_link}
              className={`${style['button']} ${style['hotmart']}`}
            >
              <img
                src={hotmart.src}
                alt={'hotmart'}
              />
            </a>
          </div>
          <div className={style['description']}>
            <div className={`${style['title']} desktop`}>
              <h1>{props.title}</h1>
              <h4>{props.date}</h4>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}