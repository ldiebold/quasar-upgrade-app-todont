<template>
  <q-btn
    v-bind="$attrs"
    @click="dialogShowing = true"
  >
    <q-dialog
      v-model="dialogShowing"
      content-class="bg-blue-1"
    >
      <q-card class="bg-white">
        <q-card-section>
          <q-input
            v-model="todoTitle"
            label="title"
            filled
          />
        </q-card-section>

        <q-card-section>
          <q-btn
            label="create"
            @click="handleCreateTodo"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-btn>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('todos')

export default {
  // name: 'ComponentName',
  data () {
    return {
      dialogShowing: false,

      todoTitle: ''
    }
  },

  methods: {
    handleDateInput (one, two) {
      console.log(one, two)
    },

    handleCreateTodo () {
      this.createTodo({
        title: this.todoTitle
      })
    },

    ...mapMutations({
      createTodo: 'CREATE_TODO'
    })
  }
}
</script>
