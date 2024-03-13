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
    const weather = useWeatherStore()

    const getUserData = async (data) => {
      datas.value = data
      try {
        const response = await weather.getCurrentWeather(data)
        console.log('The fucking Response', response)
      } catch (error) {
        console.log('The fucking Error', error)
      }
    }

    return { getUserData, datas }
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
.inline-clr {
  color: var(--green-400);
  text-transform: uppercase;
}
.pi-sun {
  font-size: 1.9rem;
}
</style>
@/api/utils
