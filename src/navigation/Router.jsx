import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '../views/pages/Home';
import Layout from '../views/layouts/Layout';
import About from '../views/pages/About';

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Router;
