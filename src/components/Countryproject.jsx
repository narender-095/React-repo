import { useEffect, useState } from 'react'
import { useRef } from 'react'
import '../App.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CountryCard from './CountryCard';
import { toast } from 'react-toastify';

function Countryproject() {

  const ref = useRef(null);
  const [search, setSearch] = useState("")

  // Country-cards Sectiion
  const [data, setData] = useState([])
  const getData = async () => {

    try {
       const searchQuery = search.length > 0 ? `q=${search}` : ""
          const response = await fetch(`https://api.restcountries.com/countries/v5?${searchQuery}`, {
            headers: {
              'Authorization': 'Bearer rc_live_cb5a726b4b8f49a6908aed01564ac15c'
            }
          })
          
          const data = await response.json()
          setData(data.data.objects)
          console.log(data.data)
          toast.success("Data fetched successfully",{
            position: 'top-center'
          })
        } 
          
          catch (error) {
          toast.error("Something went wrong"),{
            position: 'bottom-center'
          }
        }         
  }
      
        useEffect(() => {
          getData();
        }, [search])


return (
  <>
     {/* <input ref={ref} />  

      <button onClick = {() =>
      ref.current.focus() }>
        focus 
      </button>  */}

  {/* NAVBAR  */}
    <header id='header'>
      <div className='head'>
        <h2> Where in the world? </h2>
        <div style={{paddingTop: 10 }}>
          <DarkModeOutlinedIcon/>
          <span style={{fontWeight: "600"}}> Dark mode </span>
        </div>
      </div>
    </header>

    <div className="main-container">

      {/* SEARCH  */}
      <div className="search-container">
        <div className="search">
          <SearchIcon/>     
          <input 
            value={search} 
            onChange={(ev) => setSearch(ev.target.value)} 
            type="text" 
            placeholder='Search for a country...'
          />
        </div>

        <select className='Region'>
          <option hidden  > Filter by Region </option>
          <option value= " Africa " > Africa </option>
          <option value= " America " > America </option>
          <option value= " Asia " > Asia </option>
          <option value= " Europe " > Europe </option>
          <option value= " Oceania " > Oceania </option>
        </select>

      </div>

      {/* Country-cards */}
      <div className="parent">
        {
        data.map((country) => {
          return (
            country.flag.url_png ? <CountryCard country={country} /> : null
            )
          })
        }
      </div>    
    </div>

    

  </>
)
}

export default Countryproject
