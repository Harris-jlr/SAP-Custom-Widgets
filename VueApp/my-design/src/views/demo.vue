<template>

    <pricing />
    <loader v-if="loading" />

</template>

<script>
import loader from '/src/components/loader.vue'
import pricing from '/src/components/pricing.vue'

export default {
  components: {loader, pricing },

  name: "app",
        data: () => ({
            loading: true
        }),
        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 4800)
        }
}
</script>