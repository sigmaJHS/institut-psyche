import style from './Navbar.module.scss'

function Navbar(){
  return (
    <nav className={style['navbar']}>
      <div className='container'>
        <div id={style['brand']}>
          <img src="" alt="Institut Psyché" />
        </div>
        <button className={style['toggle']}>
          <div className={style['line']} />
          <div className={style['line']} />
          <div className={style['line']} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;