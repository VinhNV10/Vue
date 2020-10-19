<template>
  <div class="container">
    <span>Screen Search</span>
    <Button />
    <router-view />
  </div>
</template>
<script>
import Button from '../../components/Button'

export default {
  name: 'Search',
  components: {
    Button,
  }
}
</script>
<style lang="scss" scoped>

</style>