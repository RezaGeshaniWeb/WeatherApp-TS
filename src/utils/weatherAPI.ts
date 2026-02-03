const API_KEY = "2eaa31afcb9e58e956d8f67677d7be78"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export async function fetchWeatherData(city: string) {
    try {
        const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        if (!res.ok) {
            throw new Error('failed to fetch')
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}