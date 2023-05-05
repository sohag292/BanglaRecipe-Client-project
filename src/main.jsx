import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Main from './components/layout/Main.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Error from './components/Error/Error';
import AuthProvider from './components/Provider/AuthProvider';
import CheifViewDetails from './components/CheifViewDetails/CheifViewDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path: "/chiefdetails/:id",
        element:<PrivateRoute><CheifViewDetails></CheifViewDetails></PrivateRoute>,
        loader:({params}) =>fetch(`https://indian-recipe-project-server-side-sohag292.vercel.app/chiefdetails/${params.id}`)
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
