import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Posts from './pages/Posts';
import Info from './pages/Info';
import Contacts from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: '/',               // корневой путь
    element: <Layout />,     // обёртка с навигацией
    children: [              // дочерние маршруты
      {
        index: true,         // это путь "/"
        element: <Posts />
      },
      {
        path: 'info',
        element: <Info />
      },
      {
        path: 'contacts',
        element: <Contacts />
      }
    ]
  }
]);


function App() {

  return <RouterProvider router={router} />;
}

export default App
