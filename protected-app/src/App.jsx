import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import NotFound from './pages/NotFound';
import Layout from './Layout';
import Admin from './pages/Admin';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState(null);

  const onLogout = () => {
    setIsAuth(false);
    setRole(null);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'profile',
          element: (
            <ProtectedRoute isAuth={isAuth} >
              <Profile onLogout={() => onLogout()} />
            </ProtectedRoute>
          ),
        },
        {
          path: 'admin',
          element: (
            < AdminRoute isAuth={isAuth} role={role}>
              <Admin onLogout={() => onLogout()} />
            </ AdminRoute>
          ),
        },
        {
          path: 'login',
          element: <Login setIsAuth={setIsAuth} setRole={setRole} />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
