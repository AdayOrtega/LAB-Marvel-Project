import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Root from '../Layouts/root.jsx';
import ComicPage from '../Page/ComicPage/ComicPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/comic',
        element: <ComicPage />,
      },
    ],
  },
])
export default router