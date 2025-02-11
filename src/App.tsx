import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet

} from "react-router-dom";
import User from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss"
import Product from "./components/product/Product";
import Users from "./pages/users/Users"

const Layout = ()=>{
  return(
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  )
}



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
      ,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <Product />,
        },
        {
          path: "users/:id",
          element: <User />,
        },
      ]
    }
   
  ]);
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
