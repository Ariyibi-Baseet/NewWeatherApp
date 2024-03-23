import { defineStore } from 'pinia'
import axios from 'axios'
import { api } from '@/api/utils'

export const useWeatherStore = defineStore('weather', () => {
  const getCurrentWeather = async (city) => {
    try {
      const response = await axios.get(
        `${api}/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`
      )
      if (response.status === 400) {
        console.log('Hello')
      }
      return response
    } catch (error) {
      return error
    }
  }
  return { getCurrentWeather }
})
