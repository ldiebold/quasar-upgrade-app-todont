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
            v-model="todontTitle"
            label="title"
            filled
          />
        </q-card-section>

        <q-card-section>
          <q-btn
            label="create"
            @click="handleCreateTodont"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-btn>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('todonts')

export default {
  data () {
    return {
      dialogShowing: false,

      todontTitle: ''
    }
  },

  methods: {
    handleCreateTodont () {
      this.createTodont({
        title: this.todontTitle
      })
      this.dialogShowing = false
    },

    ...mapMutations({
      createTodont: 'CREATE_TODONT'
    })
  }
}
</script>
