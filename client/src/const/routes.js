import Home from './../views/Home'
import About from './../views/About'
import Publications from './../views/Publications'
import Publication from './../views/Publication'
import Contact from './../views/Contact'

import FormacaoEmPsicanalise from './../views/FormacaoEmPsicanalise'
import Projeto8Semanas from './../views/Projeto8Semanas'
  
export const navigableRoutes = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    view: Home
  },
  {
    id: 2,
    name: 'Sobre',
    path: '/sobre',
    view: About
  },
  {
    id: 3,
    name: 'Publicações',
    path: '/publicacoes',
    view: Publications
  },
  {
    id: 4,
    name: 'Cursos',
    children: [
      {
        id: 7,
        name: 'Formação em Pscanálise',
        path: 'formacao_em_psicanalise',
        view: FormacaoEmPsicanalise
      },
      {
        id: 8,
        name: 'Projeto 8 Semanas',
        path: 'projeto_8_semanas',
        view: Projeto8Semanas
      }
    ]
  },
  {
    id: 5,
    name: 'Contato',
    path: '/contato',
    view: Contact
  }
];

export const hiddenRoutes = [
  {
    id: 6,
    path: '/publicacao',
    view: Publication
  }
];

export const allRoutes = navigableRoutes.concat(hiddenRoutes);