import style from './ContactLinks.module.scss'

import links from './../const/links'

export default function Contact(props){  
  return (
    <ul>
      {
        links.map(
          function (link, key) {
            return (props.include === undefined || props.include.includes(link.name))
            ? (
              <li key={key}>
                <link.icon className={style['icon']} />
                <a
                  href={link.href}
                  target='blank'
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