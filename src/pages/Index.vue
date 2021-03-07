<template>
  <q-page
    class="flex column flex-center"
    padding
  >
    <div class="text-h4">
      Next month is {{ nextMonth }}! 😱
    </div>

    <q-btn
      class="q-mt-md"
      to="todont"
      label="get started!"
      append
      color="accent"
    />

    <q-btn
      to="horizontal-todonts"
      label="get started horizontally!!!"
      append
      color="secondary"
      class="q-mt-md"
    />

    <about-this-app-button
      color="primary"
      class="q-mt-md"
      label="About this app"
    />

    <q-img
      class="q-mt-lg"
      width="400px"
      no-default-spinner
      src="~assets/big-image.jpg"
    />
  </q-page>
</template>

<script>
import AboutThisAppButton from 'components/AboutThisAppButton.vue'
import { date } from 'quasar'

export default {
  components: {
    AboutThisAppButton
  },

  meta: {
    meta: {
      rhyme: {
        name: 'rhyme',
        content: 'Everything is better when you add a little meta'
      },
      description: {
        name: 'description',
        content: 'The greatest todont app in the quasarverse'
      }
    }
  },

  computed: {
    nextMonth () {
      const now = new Date()
      const nextMonth = date.addToDate(now, { month: 1 })
      return date.formatDate(nextMonth, 'MMMM')
    }
  },

  mounted () {
    this.$q.loading.show({
      message: '<div class="bg-grey-9 q-pa-lg text-h4 rounded-borders">I <b>PROMISE</b> this is <b class="text-red-4">WELL WORTH THE WAIT!</b></div>'
    })

    setTimeout(() => {
      this.$q.loading.hide()
    }, 3000)
  }
}

</script>
