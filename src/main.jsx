import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages router
import App from './App.jsx'
import Home from './router/home/Home.jsx'
import About from './router/about/About.jsx'
import Team from './router/team/Team.jsx'
import Process from './router/process/Process.jsx'
import Pricing from './router/pricing/Pricing.jsx'
import Blog from './router/blog/Blog.jsx'
import ContactUs from './router/contactUs/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/team",
        element: <Team/>
      },
      {
        path: "/process",
        element: <Process/>
      },
      {
        path: "/pricing",
        element: <Pricing/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
