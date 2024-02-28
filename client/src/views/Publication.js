import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import Image from './../components/Image.js'
import style from './Publication.module.scss'

export default function Publication () {
  const [publication, setPublication] = useState(
    {
      'content': []
    }
  );
  const [searchParameters] = useSearchParams();

  useEffect(
    function () {
      axios.get(process.env.REACT_APP_BACKEND_SERVER + '/publication/' + searchParameters.get('text_code'))
      .then(
        function (response) {
          setPublication(response.data);
        }
      )
    },
    [searchParameters]
  );

  function renderBold (content) {
    return <b>{content}</b>
  }

  function renderHeading (chunk) {
    return <h2 key={chunk.id}>{chunk.content}</h2>;
  }

  function renderParagraph (chunk) {
    let contentFinal = null;

    if(chunk.content.indexOf('<b>') === -1) {
      contentFinal = chunk.content;
    }else{
      let contentCopy = chunk.content.replaceAll('</b>', '<b>').split('<b>');
          
      for(let ka in contentCopy){
        if(ka % 2 !== 0) {
          contentCopy[ka] = renderBold(contentCopy[ka]);
        }
      }

      contentFinal =
        contentCopy.map(
          function(content){
            return content;
          }
        );
    }

    return (
      <p key={chunk.id}>{contentFinal}</p>
    );
  }

  function renderListItem(chunk) {
    return <li key={chunk.id}>{chunk.content}</li>;
  }

  function renderList (chunk) {
    return (
      <ul key={chunk.id}>
        {
          chunk.content.map(
            function (item) {
              return renderListItem(item);
            }
          )
        }
      </ul>
    );
  }

  return (
    <div id={style['publication']}>
      <div className='container'>
        <h1>{publication.title}</h1>
        <Image
          className={style['image']}
          src={publication.image}
          alt={publication.image}
          v-align='center'
          h-align='center'
        />
        {
          publication.content.map(
            function (chunk) {
              let render = null;

              switch (chunk.type) {
                case 'heading':
                  render = renderHeading (chunk);
                break;
                case 'paragraph':
                  render = renderParagraph (chunk);
                break;
                case 'list':
                  render = renderList (chunk);
                break;
                default: break;
              }

              return render;
            }
          )
        }
      </div>
    </div>
  );
}