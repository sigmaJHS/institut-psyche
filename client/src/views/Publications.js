import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

import loader from './../assets/loader.svg'
import Image from './../components/Image';
import style from './Publications.module.scss'

export default function Publications () {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      setIsLoading(true);
      axios.get(process.env.REACT_APP_BACKEND_SERVER + '/publications')
      .then(
        function (response) {
          setIsLoading(false);
          console.log(response);
          setPublications(response.data);
        }
      )
    },
    []
  );

  return (
    <div className='container'>
      <h1>Publicações</h1>
      <img
        className={style['loading']}
        src={loader}
        alt='Carregando...'
        loading={(isLoading) ? 'true' : 'false'}
      />
      {
        publications.map(
          function (publication) {
            return (
              <div
                key={publication.id}
                className={ style['card'] }
              >
                <NavLink to={ '/publicacao?text_code=' + publication.text_code }>
                  <Image
                    src={publication.image}
                    alt={publication.image}
                    className={style['image']}
                    v-align='center'
                    h-align='center'
                  />
                  <div className={style['text']}>
                    <div className={ style['title'] }>{publication.title}</div>
                    <div className={ style['date'] }>{publication.date}</div>
                    {
                      publication.highlight === 1 &&
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