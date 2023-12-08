import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/pages/About";
import ContactUs from './components/pages/ContactUs';
import Cart from "./components/pages/Cart";
import ErrorPage from "./components/pages/ErrorPage";
import RestaurantMenu from "./components/pages/RestaurantMenu";
import LoginPage from "./components/authentication/LoginPage";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Main from "./components/Main";
import Footer from "../src/components/pages/Footer";

const GroceryList = lazy(()=> import("./components/grocery/Grocery"));


 
const AppLayout = () => {
  const [userName,setUserName] = useState();
useEffect(()=>{
  const data = {
    name: "Kushal",
  };

  setUserName(data.name);

},[]);


  return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
        <div className="app">
          <Header />
          <Outlet/>
          <Footer/>
          
        </div>
        </UserContext.Provider>
      </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element :<AppLayout/>,
    children:[
      {
         path:"/",
         element:<Main/>
      },
      {
        path:"/home",
        element:<Body/>
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
      },
      {
        path:"/grocery",
        element:<Suspense fallback ={<div>Please Wait ...</div>}><GroceryList/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path:"/authentication",
        element:<LoginPage/>
      }
    ],
  
    errorElement:<ErrorPage/>
 
  },  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);



