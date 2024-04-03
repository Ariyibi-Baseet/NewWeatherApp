import { defineStore } from 'pinia'
import axios from 'axios'
// import { api, apiKey } from '@/api/utils'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const errMessage = ref('')
  const getCurrentWeather = async (city) => {
    try {
      // const apiUrl = `${api}/current.json?key=${apiKey}&q=${city}`
      const apiURL =
        'https://api.weatherapi.com/v1/current.json?key=267e2861260b4cd7ba4172707231105&q=' + city
      const response = await axios.get(apiURL)
      return response
    } catch (error) {
      // console.log(error.response.data.error)
      errMessage.value = error.response.data.error
      return error
    }
  }
  return { getCurrentWeather, errMessage }
})
