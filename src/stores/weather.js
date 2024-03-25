import { defineStore } from 'pinia'
import axios from 'axios'
import { api, apiKey } from '@/api/utils'

export const useWeatherStore = defineStore('weather', () => {
  const getCurrentWeather = async (city) => {
    try {
      const apiUrl = `${api}/current.json?key=${apiKey}&q=${city}`
      console.log('The api URL', apiUrl)
      const response = await axios.get(apiUrl)
      return response
    } catch (error) {
      return error
    }
  }
  return { getCurrentWeather }
})
