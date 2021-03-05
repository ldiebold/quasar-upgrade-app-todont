<template>
  <q-btn
    v-bind="$attrs"
    @click="openDialog"
  />
</template>

<script>
import AboutThisAppDialogComponent from './AboutThisAppDialogComponent.vue'

export default {
  methods: {
    openDialog () {
      this.$q.dialog({
        component: AboutThisAppDialogComponent,
        message: 'This app has won multiple awards including "worst app" of the year AND - the prestigious - "most use of components in a nonsensical way" award',
        circle: true,
        parent: this
      })
    }
  }
}
</script>
