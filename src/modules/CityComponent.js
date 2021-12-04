import styled from "styled-components"

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`

const ChooseCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`
const SearchBox = styled.form `
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    color: black;
    margin: 20px auto;
    border-radius: 2px;
    & input {
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }
    & button {
        padding: 10px;
        font-size: 14px;
        color: white;
        background-color: black;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`
export const WeatherInfoIcons = {

    Sunrise: './icons/temp.svg',
    Humidity: '/icons/humidity.svg',
    Wind: '/icons/wind.svg',
    Pressure: '/icons/pressure.svg'
}

const CityComponent = ({setCity, fetchWeather}) => {
    return (
        <>
            <WeatherLogo src="./icons/lightning.png" />
            <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="City" onChange = {(e) => setCity(e.target.value)}/>
                <button type="submit">Search</button>
            </SearchBox>
        </>
    )
}

export default CityComponent
