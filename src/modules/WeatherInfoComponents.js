import styled from "styled-components"
import { WeatherInfoIcons } from "./CityComponent"

export const  WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
}

const WeatherCondition = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;
`
const Condition = styled.span `
    margin: 20px auto;
    font-size: 14px;
    & span {
        font-size: 28px;
    }
`
const WeatherLogo = styled.img `
    width: 100px;
    height: 100px;
    margin: 5px auto;
`
const Location = styled.span `
    font-size: 28px;
    font-weight: bold;
`
const WeatherInfoLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    margin: 20px;
    text-align: left;
    width: 90%;
`

const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

const InfoContainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`
const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px;
    & span {
        font-size: 12px;
        text-transform: capitalize;
    }
`



const WeatherInfoComponent = ({name, value}) => {
    return (
        <InfoContainer>
            <InfoIcon src = {WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent = ({weather}) => {
    const isDay = weather ?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return (
        <>
            <WeatherCondition>
                <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span> 
                    {` | ${weather?.weather[0].description}`}
                </Condition>
                <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}></WeatherLogo>
            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent 
                    name={isDay ? 'Sunset': 'Sunrise'} 
                    value={getTime(weather?.sys[isDay ? "sunset": "sunrise"])}
                />
                <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity}/>
                <WeatherInfoComponent name="Wind" value={weather?.wind?.speed}/>
                <WeatherInfoComponent name="Pressure" value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
        </>
    )
}

export default WeatherComponent
