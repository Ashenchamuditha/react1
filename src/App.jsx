import React from 'react';
import Home from '/src/Pages/Home';
import Login from '/src/Pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;