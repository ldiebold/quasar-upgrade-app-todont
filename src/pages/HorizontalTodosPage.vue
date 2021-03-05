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
        <q-card-section v-if="!todos.length">
          no todos
        </q-card-section>
        <q-card-section
          v-if="todos.length"
          class="full-height row no-wrap"
        >
          <q-card
            v-for="todo in todos"
            :key="todo.uid"
            class="q-mx-sm flex flex-center"
          >
            <q-card-section>
              <div class="text-h2">
                {{ todo.title }}
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

    <!-- <pre>{{ scrollInformation }}</pre> -->

    <!-- Create TODO FAB -->
    <q-page-sticky :offset="[22, 22]">
      <create-todo-button
        :icon="$q.iconSet.fab.icon"
        fab
        color="primary"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import CreateTodoButton from 'components/CreateTodoButton.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('todos')

export default {
  components: {
    CreateTodoButton
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
      todos: 'getTodos'
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
