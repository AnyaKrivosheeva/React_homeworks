import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Posts from './pages/Posts';
import Info from './pages/Info';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import Post from './pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'posts',
        element: <Posts />
      },
      {
        path: 'posts/:id',
        element: <Post />,
        errorElement: <h2>Пост не найден.</h2>,
      },
      {
        path: 'info',
        element: <Info />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: '*',
        element: <h2>Страница не найдена.</h2>
      },
    ]
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App
