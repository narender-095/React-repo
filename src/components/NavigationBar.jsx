import { memo, useMemo, useState } from "react"
import { Link } from "react-router"

// const NavigationBar = (props) => {
//   return (
//     <div id='one'>
//         <Link to="/" id="nav-link"> Home </Link>
//         <Link to="/about_us" id="nav-link"> About us </Link>
//         <Link to="/contact_us" id="nav-link"> Contact us </Link>

//         <p>Hello {props.naam}</p>
//     </div>
//   )
// }

const NavigationBar = memo(({name}) => {
  // const {naam, name} = props  //object destructing
  const [num1, setNum1] = useState(3)
  const [num2] = useState(5)
  const add = () => {
    console.log("calculating")
    return num1 + num2
  }

  const result = useMemo(add, [num1, num2])
  console.log(result)


  console.log("rerendered navigation")
  return (

    <div id='one'>
        <input onChange={(ev) => setNum1(parseInt(ev.target.value))} />
        <br/>
        <Link to="/" id="nav-link"> Home </Link>
        <Link to="/about_us" id="nav-link"> About us </Link>
        <Link to="/contact_us" id="nav-link"> Contact us </Link>

        <p>Hello {name}</p>
    </div>        
  )
})

// const NavigationBar = ({naam}) => {
//   return (
//     <div id='one'>
//         <Link to="/" id="nav-link"> Home </Link>
//         <Link to="/about_us" id="nav-link"> About us </Link>
//         <Link to="/contact_us" id="nav-link"> Contact us </Link>

//         <p>Hello {naam}</p>
//     </div>
//   )
// }

export default NavigationBar
