import { NavLink } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import Image from './../components/Image';


import freud from './../assets/sigmund-freud-1153858_640.jpg'
import style from './Publications.module.scss'

const publications = [1,2,3,4,5,6,7,8,9];

export default function Publications () {
  return (
    <div className='container'>
      <h1>Publicações</h1>
      {
        publications.map(
          function (publication) {
            return (
              <div
                key={publication}
                className={ style['card'] }
              >
                <NavLink to='/'>
                  <Image
                    className={style['image']}
                    src={freud}
                    alt='Sigmund Freud'
                    v-align='center'
                    h-align='center'
                  />
                  <div className={style['text']}>
                    <div className={ style['title'] }>O que é Psicanálise?</div>
                    <div className={ style['date'] }>10/05/2023</div>
                    {
                      publication == 1 &&
                      <div className={style['highlight']}>
                        <FaStar /> Destaque
                      </div>
                    }
                  </div>
                </NavLink>
              </div>
            );
          }
        )
      }
    </div>
  );
}