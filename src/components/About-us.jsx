import React from 'react'
import { Link } from "react-router"
import NavigationBar from './NavigationBar'

const Aboutus = () => {
  return (
    <div>
        {/* <div id='one'>
            <Link> Home </Link>
            <Link> About us </Link>
            <Link> Contact us </Link>
        </div> */}
        <NavigationBar />
        <p> About_us </p>
        <Link to="/about_us"> About_us</Link>
    </div>
  )
}

export default  Aboutus