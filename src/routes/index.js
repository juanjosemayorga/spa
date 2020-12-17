import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../templates/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'


// Vamos a generar un objeto para establecer cuales son
// las rutas y que va a hacer render en cada una de ellas

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
}

// Vamos a crear nuestro manejador o router

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();

}

export default router