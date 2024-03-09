import style from './Toggler.module.scss'

export default function Toggler (props) {
  return (
    <button
      className={style['toggler']}
      expanded={props.expanded}
      onClick={props.onClick}
    >
      <div className={style['line']} />
      <div className={style['line']} />
      <div className={style['line']} />
    </button>
  )
}