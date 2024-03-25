import { defineStore } from 'pinia'
import axios from 'axios'
import { api, apiKey } from '@/api/utils'

export const useWeatherStore = defineStore('weather', () => {
  const getCurrentWeather = async (city) => {
    try {
      const response = await axios.get(`${api}/current.json?key=${apiKey}&q=${city}`)
      return response
    } catch (error) {
      return error
    }
  }
  return { getCurrentWeather }
})
