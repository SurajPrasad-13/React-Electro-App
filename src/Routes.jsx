import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Services from './Components/Pages/Services'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import JoinUs from "./Components/Pages/JoinUs";
import Blog from "./Components/Pages/Blog";
import Project from "./Components/Pages/Project";
import Home from "./Components/Pages/Home";

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'services',
        element:<Services/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
     
      {
        path:'joinus',
        element:<JoinUs/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path:'project',
        element:<Project/>
      },
    ]
  }
])
export default router