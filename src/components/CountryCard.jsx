import React from 'react'
import { useNavigate } from 'react-router'




const CountryCard = ({country}) => {
const navigate = useNavigate();

  return (
  <>
    <div onClick={() => navigate(`/country/${country.names.common}`, {state: {country}})} id='countryimages'>
      {/* condition rendering */}
      {country.flag.url_png ? <img id='img' src={country.flag.url_png} alt="flag" /> : null} 
      <div className="items">
        <p style={{ fontWeight: 800}}> {country.names.common}</p>
        <p> <span> Population: </span> {country.population} </p>
        <p> <span> Region: </span> {country.region} </p>
        <p> <span> Capital: </span> {country?.capitals[0]?.name} </p>
      </div>
    </div>
  </>
  )
}

export default CountryCard
