import style from './NavLinkText.module.scss'

export default function NavLinkText (props) {
  return (
    <div
      className={style['text']}
      active={props.active}
    >
      {props.children}
    </div>
  );
}