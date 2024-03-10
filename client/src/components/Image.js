'use client';

import { useState, useEffect, useRef } from 'react'
import { getImageSize } from 'react-image-size';
import style from './Image.module.scss'

export default function Image ( props ) {
  const imgRef = useRef();
  const frameRef = useRef();

  const [imgSize, setImgSize] = useState (
    {
      width: 'auto',
      height: 'auto'
    }
  );

  useEffect(
    function () {
      if(props.src !== undefined) {
        async function getDimensions() {
          let dimensions = await getImageSize(props.src);
          
          setImgSize(
            (dimensions.width > dimensions.height)
            ? { width: 'auto', height: '100%' }
            : { width: '100%', height: 'auto' }
          );
        }
  
        getDimensions();
      }
    },
    [props.src]
  )

  return (
    <div
      className={`${style['frame']} ${props.className}`}
      ref={frameRef}
    >
      <img
        src={props.src}
        alt={props.alt}
        ref={imgRef}
        style={imgSize}
        v-align={props['v-align'] ?? null}
        h-align={props['h-align'] ?? null}
      />
    </div>
  )
}