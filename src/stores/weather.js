import { defineStore } from 'pinia'
import axios from 'axios'
import { api, apiKey } from '@/api/utils'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const errMessage = ref('')
  const getCurrentWeather = async (city) => {
    try {
      const apiUrl = `${api}/current.json?key=${apiKey}&q=${city}`
      const response = await axios.get(apiUrl)
      return response
    } catch (error) {
      // console.log(error.response.data.error)
      errMessage.value = error.response.data.error
      return error
    }
  }
  return { getCurrentWeather, errMessage }
})
