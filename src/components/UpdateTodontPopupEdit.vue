<template>
  <q-popup-edit
    v-slot="scope"
    v-model="updateValue"
    @save="handleUpdateTodont"
  >
    <q-input
      v-model="scope.value"
      filled
      dense
      autofocus
      @keyup.enter="scope.set"
    />
  </q-popup-edit>
</template>

<script>
import { useStore } from 'vuex'

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

  setup (props, { emit }) {
    const store = useStore()

    const updateTodont = payload => store.commit('todonts/UPDATE_TODONT', payload)

    const updateValue = ref(props.todont.title)

    function handleUpdateTodont (title) {
      updateTodont({
        uid: props.todont.uid,
        data: {
          title
        }
      })
      emit('update-success', updateValue.value)
    }

    return {
      dialogShowing: false,
      handleUpdateTodont,
      updateValue
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
