import NavbarInner from './NavbarInner'

import style from './Navbar.module.scss'

export default function Navbar () {
  return (
    <div className={style['navbar']}>
      <div className='container'>
        <NavbarInner />
      </div>
    </div>
  )
}