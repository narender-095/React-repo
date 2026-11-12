import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Clock = () => {
    const [time, setTime] = useState("00:00:00");
   

    useEffect(() => {
       const interval =  setInterval(() =>{
            const date = new Date();
            setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
            console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
       }, 1000)

       return () => {
        console.log("cleaned up")
        clearInterval(interval)
       }
    }, [])

  return (
    <div>
         <Link to="/about_us">About</Link>
         <p>{Time}</p>
    </div>
  )
}

export default Clock
