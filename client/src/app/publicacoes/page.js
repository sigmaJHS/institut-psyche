import Link from 'next/link'
import { FaStar } from 'react-icons/fa'

import Image from '@/components/Image';
import style from './page.module.scss'

export default function Publications () {
  return (
    <div className='container'>
      <h1>Publicações</h1>
      <div className={ style['card'] }>
        <Link href={ '/publicacoes/o_que_e_psicanalise' }>
          <Image
            src={'sigmund-freud-1153858_640.jpg'}
            alt={'Sigmund Freud'}
            className={style['image']}
            v-align='center'
            h-align='center'
          />
          <div className={style['text']}>
            <div className={ style['title'] }>O que é Psicanálise</div>
            <div className={ style['date'] }>10/05/2023</div>
            <div className={style['highlight']}>
                <FaStar /> Destaque
              </div>
          </div>
        </Link>
      </div>
    </div>
  );
}