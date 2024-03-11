import Link from 'next/link'
import { FaStar } from 'react-icons/fa'

import Image from '@/components/Image';
import style from './page.module.scss'

export default async function Publications () {
  return (
    <div className='container'>
      <h1>Publicações</h1>
      <div className={ style['card'] }>
        <Link href={ '/publicacoes/o-que-e-psicanalise' }>
          <Image
            src={ 'sigmund-freud-1153858_640.jpg' }
            alt={ 'O Que é Psicanálise' }
            className={style['image']}
            v-align='center'
            h-align='center'
          />
          <div className={style['text']}>
            <div className={ style['title'] }>{ 'O Que é Psicanálise' }</div>
            <div className={ style['date'] }>{ '05/10/2023' }</div>
            <div className={style['highlight']}>
              <FaStar /> Destaque
            </div>   
          </div>
        </Link>
      </div>
      <div className={ style['card'] }>
        <Link href={ '/publicacoes/quem-deve-fazer-terapia' }>
          <Image
            src={ 'lacan.jpg' }
            alt={ 'Quem deve fazer terapia' }
            className={style['image']}
            v-align='center'
            h-align='center'
          />
          <div className={style['text']}>
            <div className={ style['title'] }>{ 'Quem deve fazer terapia' }</div>
            <div className={ style['date'] }>{ '29/02/2024' }</div>
          </div>
        </Link>
      </div>
    </div>
  );
}