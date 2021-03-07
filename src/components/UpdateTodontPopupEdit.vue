<template>
  <q-popup-edit
    v-model="updateValue"
    @save="handleUpdateTodont"
  >
    <q-input
      v-model="updateValue"
      filled
      dense
      autofocus
    />
  </q-popup-edit>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('todonts')

import { ref } from 'vue'

export default {
  props: {
    todont: {
      required: true,
      type: Object
    }
  },

  emits: [
    'update-success'
  ],

  setup (props) {
    const updateValue = ref(props.todont.title)

    function handleUpdateTodont () {
      this.updateTodont({
        uid: this.todont.uid,
        data: {
          title: updateValue.value
        }
      })
      this.$emit('update-success', updateValue.value)
    }

    return {
      dialogShowing: false,
      handleUpdateTodont,
      updateValue,
      ...mapMutations({
        updateTodont: 'UPDATE_TODONT'
      })
    }
  }

  // data () {
  //   const vm = this
  //   return {
  //     dialogShowing: false,

  //     updateValue: vm.todont.title
  //   }
  // },
}
</script>
