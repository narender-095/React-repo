import React, { useContext, useEffect } from 'react'
import { Link } from "react-router"
import NavigationBar from './NavigationBar'
import { useState } from 'react'
import { AppContext } from '../App'
import Post from './Post'
import Contactus from './Contact-us'

const Home = () => {
  // const {name, setName} = useContext(AppContext)
  // console.log(name)

  const [posts, setPosts] = useState([])
  const [name, setName] = useState("Narender")
  const [contact, setContact] = useState(8747477477)

  // async function getData(){

  // }

  // const getData = async () => {
  //   const response = await fetch('https://dummyjson.com/posts')
  //   const data = await response.json()
  //   console.log(data.posts)
  //   setPosts(data.posts)
  //   // console.log(response)
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  // Counter
  // let [count, setCount] = useState(0)

  // const add = () => {
  //   setCount(count++)
  // }

  // const substract = () => {
  //   setCount( count--)
  // }

  // Change name.
  // let [name, setName] = useState("Anonymous")
  // const changeState = (ev, val) => {
  //   const value = ev.target.value
  //   setName(value)
  // }


  // Sprcific alpha. word not allow
  // let [name, setName] = useState("Anonymous")
  // const changeState = (ev) => {
  //   const value = ev.target.value
  //   if(value.at(-1) == "r") return 
  //   setName(value)
  // }

  // let [name, setName] = useState("Narender")
  // const askName = () => {
  //   const userName = prompt("Enter your name")
  //   setName(userName)
  // }

  // useEffect(() => {
  //   askName()
  // },[])

  return (
    <div>
        {/* <div id='one'>
           <Link> Home </Link>
           <Link> About us </Link>
           <Link> Contact us </Link>
        </div> */}

        {/* <NavigationBar /> */}

        {/* Counter  */}
        {/* <h1> {count} </h1> 
        <h2> {count}</h2>
        <p onClick={add}  > + </p>
        <p onClick={substract}  > - </p> 
        
        <h3> Hey there {name}</h3>
        <input type="text" value={name} onChange={(ev)  => changeState(ev, "Aalooo")} />*/}


        <input placeholder='change name' onChange={(ev) => setName(ev.target.value)} value={name} />
        <input placeholder='change contact' onChange={(ev) => setContact(ev.target.value)} value={contact} />
        <NavigationBar  name={name} />
        <Contactus contact={contact} />


    </div>
  )
}

export default Home
