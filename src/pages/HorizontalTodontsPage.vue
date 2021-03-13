<template>
  <q-page padding>
    <q-card
      class="q-mt-xl"
      bordered
      flat
    >
      <q-scroll-area
        ref="scrollArea"
        horizontal
        style="height: 300px;"
        @scroll="handleScrolled"
      >
        <q-card-section v-if="!todonts.length">
          no todonts
        </q-card-section>
        <q-card-section
          v-if="todonts.length"
          class="full-height row no-wrap"
        >
          <q-card
            v-for="todont in todonts"
            :key="todont.uid"
            class="q-mx-sm flex flex-center"
          >
            <q-card-section>
              <div class="text-h2">
                {{ todont.title }}
              </div>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-scroll-area>
    </q-card>

    <q-btn
      label="last"
      flat
      @click="goToEnd"
    />

    <pre>{{ scrollInformation }}</pre>

    <!-- Create TODONT FAB -->
    <q-page-sticky :offset="[22, 22]">
      <create-todont-button
        :icon="$q.iconSet.fab.icon"
        fab
        color="primary"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import CreateTodontButton from 'components/CreateTodontButton.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('todonts')

export default {
  components: {
    CreateTodontButton
  },

  data () {
    return {
      scrollInformation: {
        getScrollPosition: null,
        scrollEventData: null
      }
    }
  },

  computed: {
    ...mapGetters({
      todonts: 'getTodonts'
    })
  },

  methods: {
    handleScrolled (scrollEventData) {
      scrollEventData.ref = null
      this.scrollInformation.getScrollPosition = this.$refs.scrollArea.getScrollPosition()
      this.scrollInformation.scrollEventData = scrollEventData
    },

    goToEnd () {
      this.$refs.scrollArea.setScrollPercentage(1)
    }
  }
}
</script>
