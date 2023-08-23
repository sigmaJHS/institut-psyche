import Home from './../views/Home'
import About from './../views/About'
import Publications from './../views/Publications'
import Courses from './../views/Courses'
import Contact from './../views/Contact'

const routes = [
  {
    name: 'Home',
    path: '/',
    view: Home
  },
  {
    name: 'Sobre',
    path: '/sobre',
    view: About
  },
  {
    name: 'Publicações',
    path: '/publicacoes',
    view: Publications
  },
  {
    name: 'Cursos',
    path: '/cursos',
    view: Courses
  },
  {
    name: 'Contato',
    path: '/contato',
    view: Contact
  }
];

export default routes;