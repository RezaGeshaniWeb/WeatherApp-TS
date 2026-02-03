export interface WeatherData {
    name: string
    weather: {
        main: string
        description: string
        icon: string
    }[]
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        humidity: number
        pressure: number
    }
    wind: {
        speed: number
    }
    clouds: {
        all: number
    }
    sys: {
        country: string
        sunrise: number
        sunset: number
    }
}

function WeatherCard({ data }: { data: WeatherData }) {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    return (
        <div className="mt-10 w-full max-w-xl rounded-2xl bg-slate-300 text-slate-800 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
                <div>
                    <h2 className="text-2xl font-bold">
                        {data.name}, {data.sys.country}
                    </h2>
                    <p className="capitalize text-slate-500">
                        {data.weather[0].description}
                    </p>
                </div>
                <img src={iconUrl} alt="Weather icon" />
            </div>

            {/* Temperature */}
            <div className="px-6 py-6 text-center">
                <p className="text-6xl font-bold text-sky-600">
                    {Math.round(data.main.temp)}°C
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    Feels like {Math.round(data.main.feels_like)}°C
                </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 bg-slate-300 px-6 py-6 text-sm">
                <div>🌡 Min Temp: {data.main.temp_min}°C</div>
                <div>🌡 Max Temp: {data.main.temp_max}°C</div>
                <div>💧 Humidity: {data.main.humidity}%</div>
                <div>☁️ Cloudiness: {data.clouds.all}%</div>
                <div>🌬 Wind Speed: {data.wind.speed} m/s</div>
                <div>🔽 Pressure: {data.main.pressure} hPa</div>
            </div>
        </div>
    )
}

export default WeatherCard
