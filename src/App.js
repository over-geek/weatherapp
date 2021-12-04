import styled from "styled-components";
//import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponents";
import { useState } from "react";
import CityComponent from "./modules/CityComponent";
import axios from "axios";

const API_KEY = 'b815fc400c3607b13538a85c76699b0d';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Monserrat;
`;


const AppLabel = styled.span `
  color: black;
  font-size: 18px;
  font-weight: bold;
`

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault()
    const response = 
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
    setWeather(response.data)
  }

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather ?
        (<WeatherComponent weather={weather}/>) 
        : 
        (<CityComponent setCity={setCity} fetchWeather= {fetchWeather}/>)
      }
    </Container>
  );
}

export default App;
