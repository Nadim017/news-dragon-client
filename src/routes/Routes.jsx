import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../layouts/NewsLayout';
import News from '../pages/News/News/News';
import LoginLayOut from '../layouts/LoginLayOut/LoginLayOut';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute';
import Terms from '../pages/Terms/Terms';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayOut></LoginLayOut>,
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/terms',
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/category',
        element: <Category></Category>,
        loader: () =>
          fetch('https://news-dragon-server-nadim017.vercel.app/news'),
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://news-dragon-server-nadim017.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://news-dragon-server-nadim017.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
