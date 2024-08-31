import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}