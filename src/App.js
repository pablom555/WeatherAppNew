import React from 'react';
import CityList from './components/CityList';
import './App.css';
import 'typeface-roboto';


const cities = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Cordoba", country: "Argentina"}
]

const click = (city) => {
    alert("Llega" + city)
}

const App = () => {
  return (
    <div className="App">
      <CityList cities={cities} onClickCity={click} ></CityList>
    </div>
  );
}

export default App;
