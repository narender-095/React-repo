import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router';



const Country = () => {
  const location = useLocation();
  const {name} = useParams();
  const navigate = useNavigate();
  const [country, setcountry] = useState()


  const getdata = async () =>{
    const response = await fetch(`https://api.restcountries.com/countries/v5?names.common=${name}`, {
            headers: {
              'Authorization': 'Bearer rc_live_cb5a726b4b8f49a6908aed01564ac15c'
            }
          })

     const data = await response.json()
     setcountry(data.data.objects[0])
     console.log(data)
  }

  

  // Access the state safely using optional chaining
  // const {country}  = location.state || {};

  useEffect(() => {
    // if(!country) navigate("/countryproject")
      getdata()
    
  }, [])


  return (
  <>
  {country && <div>     
    <img id='img' src={country.flag.url_png} alt="flag" /> 
    <div className="items">
        <p style={{ fontWeight: 800}}> {country.names.common}</p>
        <p> <span> Population: </span> {country.population} </p>
        <p> <span> Region: </span> {country.region} </p>
        <p> <span> Capital: </span> {country?.capitals[0]?.name} </p>
    </div>
  </div>}

  {/* <div>     
    <img id='img' src={country?.flag?.url_png} alt="flag" /> 
    <div className="items">
        <p style={{ fontWeight: 800}}> {country?.names?.common}</p>
        <p> <span> Population: </span> {country?.population} </p>
        <p> <span> Region: </span> {country?.region} </p>
        <p> <span> Capital: </span> {country?.capitals[0]?.name} </p>
    </div>
  </div> */}



  </>
  )
}

export default Country
