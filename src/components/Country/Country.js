import React from 'react'

const Country = (props) => {
  const { name, population, region, flags } = props.country
  const flagStyle = {height: '50px'}
  const handleAddCountry = props.handleAddCountry
  return (
    <div>
      <h4>This is {name.common}</h4>
      <img style={flagStyle} src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <button onClick={() => handleAddCountry(props.country)}>Add Country</button>

    </div>
  )
}

export default Country
