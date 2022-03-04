<template>

  <div class="w-full mx-px center">
     <myheader />
     <router-view />
     <myfooter />
  </div>
  

</template>

<script>
import myheader from '/src/components/myheader.vue'
import myfooter from '/src/components/myfooter.vue'

export default {
  components: { myheader, myfooter },
}
</script>

<style>
</style>
