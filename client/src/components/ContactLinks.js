import style from './ContactLinks.module.scss'

import links from './../const/links'

export default function ContactLinks(props){  
  return (
    <ul
      className={style['list']}
      color={(props.color !== undefined) ? props.color : null}
    >
      {
        links.map(
          function (link, key) {
            return (props.include === undefined || props.include.includes(link.name))
            ? (
              <li key={key} className={style['item']}>
                <link.icon className={style['icon']} />
                <a
                  href={link.href}
                  target='blank'
                  className={style['link']}
                >
                  {link.text}
                </a>
              </li>
            )
            : null;
          }
        )
      }
    </ul>
  )
}