<script>
import { ref } from 'vue'
export default {
  name: 'SearchBlock',
  setup(_, { emit }) {
    const userData = ref('')

    const showUserData = () => {
      emit('userData', userData.value)
    }

    return { userData, showUserData }
  }
}
</script>

<template>
  <div class="search-container">
    <FloatLabel>
      <InputText id="username" v-model="userData" />
      <label for="username">City Name?</label>
    </FloatLabel>
    <Button
      class="search-btn"
      type="button"
      label="Search"
      icon="pi pi-search"
      @click="showUserData"
    />
  </div>
</template>

<style scoped>
.search-container {
  min-width: 200px;
  background-color: rgb(66, 63, 63);
  padding: 25px 20px;
  border-radius: 4px;
  display: flex;
}
.search-btn {
  margin-left: 5px;
}
</style>
