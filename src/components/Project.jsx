// import './Project.css'
// import react from "raeact"
import { Link } from "react-router"

const Project = () => {
  // const name = "Rakesh"
  return (
    <div>
      <h1 style={{color: "green", backgroundColor: 'red'}}> It's My Birthday!. </h1>
      <h3>  On the 11<sub>th</sub> october</h3>
      <hr/>
      <Link to="/movie"> Movie ranking project/</Link>
      <br/>
      <img  src="one.png" alt=""/>
    </div>
  )
}

export default Project
