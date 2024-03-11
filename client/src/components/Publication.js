import Image from '@/components/Image';
import style from './Publication.module.scss';

export default function Publication ({ title, image, children}) {
  return (
    <div id={style['publication']}>
      <div className='container'>
        <h1>{title}</h1>
        <Image
          className={style['image']}
          src={image}
          alt={title}
          v-align='center'
          h-align='center'
        />
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}