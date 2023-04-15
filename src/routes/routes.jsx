import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Classes from "../pages/Classes";
import News from "../pages/News";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/classes',
    element: <Classes />
  },
  {
  path: '/news',
  element: <News />
  }
])