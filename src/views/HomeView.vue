<script>
import { ref } from 'vue'
import FooterComp from '@/components/FooterComp.vue'
import SearchBlock from '@/components/SearchBlock.vue'
import { useWeatherStore } from '@/stores/weather'
// import { api } from '@/api/utils'
export default {
  name: 'HomeView',
  components: { SearchBlock, FooterComp },
  setup() {
    const datas = ref('')
    const name = ref('')
    const time = ref('')
    const temperature = ref('')
    const condition = ref('')
    const conditionImage = ref('')
    const humidity = ref('')
    const userInput = ref('')
    const weather = useWeatherStore()
    const isLoading = ref(false)

    const getUserData = async (data) => {
      isLoading.value = true
      userInput.value = data
      try {
        const response = await weather.getCurrentWeather(data)
        if (response.status === 200) {
          datas.value = response.data
          name.value = datas.value.location.country
          time.value = datas.value.location.localtime
          temperature.value = `${datas.value.current.temp_c}°C`
          condition.value = datas.value.current.condition.text
          conditionImage.value = datas.value.current.condition.icon
          humidity.value = datas.value.current.humidity
        } else {
          alert('Input field cannot be empty!!!')
        }
      } catch (error) {
        // console.log('The fucking Error', error.response.data.error.message)
        return error
      } finally {
        isLoading.value = false
      }
    }

    return {
      name,
      time,
      temperature,
      condition,
      conditionImage,
      humidity,
      userInput,
      getUserData,
      datas,
      isLoading
    }
  }
}
</script>

<template>
  <main>
    <Chip class="py-0 pl-0 pr-3">
      <span
        class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center"
        >P</span
      >
      <span class="ml-2 font-medium">PRIME</span>
    </Chip>
    <h1>Weather <i class="pi pi-sun"></i> App using <span class="inline-clr">Prime Vue</span></h1>
    <SearchBlock @userData="getUserData" />
    <!-- >>>>>>>>>>> Display weather informations here <<<<<<<<<<< -->
    <div class="show-weather-details">
      <div class="empty-state" v-if="datas === ''">
        <i class="bi bi-cloud-lightning-rain-fill"></i>
        <h3>Weather Information Shows right here</h3>
      </div>
      <div class="weather-details" v-else>
        <div class="spinner-wrapper" v-if="isLoading">
          <ProgressSpinner />
        </div>

        <h3>
          <span>Name:</span> <span>{{ name }}</span>
        </h3>
        <h3>
          <span>Current Time & Date:</span> <span>{{ time }}</span>
        </h3>
        <h3>
          <span>Temperature:</span> <span>{{ temperature }}</span>
        </h3>
        <h3>
          <span>Condition:</span> <span>{{ condition }}</span>
          <span class="image" v-show="conditionImage"><img :src="conditionImage" alt="" /></span>
        </h3>
        <h3>
          <span>Humidity:</span> <span>{{ humidity }}</span>
        </h3>
      </div>
    </div>
    <FooterComp />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h3 > span:nth-child(2):not(.image) {
  color: var(--green-400);
}
.inline-clr {
  color: var(--green-400);
  text-transform: uppercase;
}
.pi-sun {
  font-size: 1.9rem;
}
.empty-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  margin-top: 30px;
  box-shadow: 2px 3px 15px rgb(211, 201, 201);
  border-radius: 8px;
  text-align: center;
  padding: 10px;
}
.weather-details {
  width: 400px;
  margin-top: 30px;
  box-shadow: 2px 3px 15px rgb(211, 201, 201);
  border-radius: 8px;
  padding: 10px;
  position: relative;
}
.image > img {
  width: 40px;
  height: 40px;
  margin-bottom: -15px;
}
.bi-cloud-lightning-rain-fill {
  color: var(--green-400);
  font-size: 40px;
  margin: auto;
}
.spinner-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
