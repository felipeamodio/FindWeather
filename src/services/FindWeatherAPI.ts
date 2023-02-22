import { api } from "./weather-api";

const { API_KEY } = process.env

export const FindWeatherAPI = {
  getForecast: (city: string) => {
    return api.get(`forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no&lang=pt`)
  }
}

/**
 * O método nada mais seria do que uma função que recebe como parâmetro o que essa API 
 * necessita para realizar a busca, que nesse caso seria a cidade digitada, pois o API_KEY valor
 *  que a API também necessita para buscar os dados já será  passado nessa função, sem a necessidade 
 * de ser recebido por parâmetro.
 */