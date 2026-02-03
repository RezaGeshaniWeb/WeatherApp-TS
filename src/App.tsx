import React, { useState } from 'react'
import './tailwind.css'
import { fetchWeatherData } from './utils/weatherAPI'
import WeatherCard, { type WeatherData } from './components/WeatherCard'

function App() {
  const [city, setCity] = useState('')
  const [apiData, setApiData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!city.trim()) return

    try {
      setLoading(true)
      const data = await fetchWeatherData(city)
      setApiData(data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex flex-col items-center px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">
        Weather App
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex w-full max-w-md gap-2"
      >
        <input
          className="flex-1 rounded-xl px-4 py-2 text-slate-100 outline-none disabled:opacity-50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Enter city name..."
          disabled={loading}
          autoFocus
        />

        <button
          disabled={loading}
          className="cursor-pointer rounded-xl bg-sky-500 px-6 py-2 font-medium text-white hover:bg-sky-600 transition disabled:cursor-not-allowed disabled:bg-sky-400"
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>

      {/* Loading Spinner */}
      {loading && (
        <div className="mt-10 flex items-center gap-3 text-white">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-white/30 border-t-white" />
          <span>weather data...</span>
        </div>
      )}

      {/* Result */}
      {!loading && apiData && <WeatherCard data={apiData} />}
    </main>
  )
}

export default App
