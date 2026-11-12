import React, { memo } from 'react'
import { Link } from "react-router"
import NavigationBar from './NavigationBar'


const Contactus = memo(({contact}) => {
  console.log("rerendered contact")
  return (
    <div>
        {/* <div id='one'>
            <Link> Home </Link>
            <Link> About us </Link>
            <Link> Contact us </Link>
        </div> */}
        {/* <NavigationBar />  */}
        <p> Contact us :- {contact} </p>
         <Link to="/Aboutus"> Contact-us </Link>
    </div>
  )
})


export default  Contactus

