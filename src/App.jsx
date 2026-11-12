// step to include css
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home';
import { createContext, useState } from 'react';
import Posts from './components/Posts';
import Products from './components/Products';
import Countryproject from './components/Countryproject';
import Country from './components/Country';
// import CountryCard  from './components/CountryCard';

  import { ToastContainer } from 'react-toastify';


export const AppContext = createContext('app')

function App() {
  const [name, setName] = useState("Narender")

  const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home  />
  // },
 
  // {
  //   path: "/movie",
  //   element: <Project1 />
  // },

  // {
  //   path: "/about_us",
  //   element: <Aboutus/>
  // },

  // {
  //   path: "/contact_us",
  //   element: <Contactus/>
  // },
  
  // {
  //   path: '/clock',
  //   element: <Clock />
  // },

  {
    path: '/posts',
    element: <Posts />
  },

  {
    path: '/products',
    element: <Products />
  },

  {
    path: '/countryproject',
    element: <Countryproject/>
    },

    {
      path: '/country/:name',
      element: <Country />
    }
]);
 
  return (
    // only one element can be return from here
    // <div>
    //    <Project1/>
    // </div>

    // {
    //   name: 'narender',
    //   setName: function(){}
    // }

    <AppContext value={{name, setName}}>
       <ToastContainer />
      <RouterProvider router={router} />
    </AppContext>
    
    
    
)
}

export default App
