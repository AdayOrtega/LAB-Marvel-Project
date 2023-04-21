import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../Page/Home/Home";
import Root from '../Layouts/root.jsx';
import OneChar from "../Page/ComicPage/CharacterPage";
import Loging from "../Components/Loging/Loging";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/characters',
        element: <OneChar />,
        /* loader: ()=>{
          if (!localStorage.getItem('token')){
            return redirect ('/')  //toLogin in home
           }else{
            return null 
          }
        } */
      },
      {
        path:'/login',
        element: <Loging />
      }
    ],
  },
])
export default router