import Detail from '../views/pages/detail'
import Favorite from '../views/pages/favorite'
import Popular from '../views/pages/popular'

const routes = {
  '/': Popular, // default page
  '/popular': Popular,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes
