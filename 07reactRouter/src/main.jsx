import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home/Home'
import About from './components/About/About'

import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import App from './App'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader }  from './components/Github/Github'

// const router =createBrowserRouter ([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//       path:"contact-us",
//       element:<Contact/>},
    
//     ]
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route path='github' 
      element={<Github/>}
      loader={githubInfoLoader}
      />




    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>
)
