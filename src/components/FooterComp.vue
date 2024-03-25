<script>
// import {ref} from "vue"
export default {
  name: 'FooterComp',
  setup() {
    const date = new Date()
    const currentYear = date.getFullYear()

    return { currentYear }
  }
}
</script>

<template>
  <footer>
    <p>
      Created with <span>❤ </span> By
      <a href="mailto:ariyibi.baseet@gmail.com">Ariyibi Baseet</a> &copy; Copyright reserved
      {{ currentYear }}
    </p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 30px;
}
span {
  color: rgb(241, 41, 41);
}
</style>
