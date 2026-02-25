import axios, { AxiosError } from "axios";
import type { WeatherForecast } from "../types/WeatherForecast";

const api = axios.create({
    baseURL: "http://localhost:5050",
    headers: {
        'Content-Type': 'application/json'
    }
});


export const weatherForecastApi = {

    async getWeatherForecast (): Promise<WeatherForecast[]> {

         try {

            const response = await api.get<WeatherForecast[]>('/weatherforecast');
            return response.data;

         }

         catch(error) {;
         
            if(axios.isAxiosError(error)){

                const axiosError = error as AxiosError;
                console.log(axiosError.message);

                throw {

                    message: axiosError.message,
                    statusCode: axiosError.response?.status,
                    isError: true
                    
                }
            };
            console.log("В процессе получения прогноза погода произошла ошибка");
            throw {
                message: "В процессе получения прогноза погода произошла ошибка",
                isError: true
            }
         }

    }
}


