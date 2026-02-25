import { useState } from "react"
import type { WeatherForecast } from "../types/WeatherForecast"
import { weatherForecastApi } from "../services/WeatherForecastService";
import { WeatherForecastGrid } from "./WeatherForecastGrid";
import "../styles/WeatherForecastComponent.css"




export default function WeatherForecastComponent() {

    const [weatherForeCasts, setWeatherForeCasts] = useState<WeatherForecast[]>([]);
const [error, setError] = useState<string | null>(null)


const handleWeatherForecast = async() => {


      try{

      setWeatherForeCasts([]);
      setError(null);

      const data = await weatherForecastApi.getWeatherForecast();

      if(data != null && data.length > 0){

        setWeatherForeCasts(data);
      }
    }

    catch(error:any){
        setError(error.message)

    }
    


}
   return (<div className="weatherforecast-container">
        <h1>Прогноз погоды</h1>
        <WeatherForecastGrid weatherForecasts={weatherForeCasts}/>
        {error && error != null && <div><h1 style={{color: 'red'}}>{error}</h1></div>}
        <button type='button' className='weatherforecast-button' onClick={handleWeatherForecast}>Посмотреть прогноз погоды</button>
    </div>)
}