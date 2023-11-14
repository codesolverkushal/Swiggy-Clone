import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/pages/About";
import ContactUs from './components/pages/ContactUs';
import Cart from "./components/pages/Cart";
import ErrorPage from "./components/pages/ErrorPage";
 
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element :<AppLayout/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<ContactUs/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);



