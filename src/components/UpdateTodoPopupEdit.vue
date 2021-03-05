<template>
  <q-popup-edit
    v-model="updateValue"
    @save="handleUpdateTodo"
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

const { mapMutations } = createNamespacedHelpers('todos')

import { ref } from '@vue/composition-api'

export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },

  setup (props) {
    const updateValue = ref(props.todo.title)

    function handleUpdateTodo () {
      this.updateTodo({
        uid: this.todo.uid,
        data: {
          title: updateValue.value
        }
      })
      this.$emit('update-success', updateValue.value)
    }

    return {
      dialogShowing: false,
      handleUpdateTodo,
      updateValue,
      ...mapMutations({
        updateTodo: 'UPDATE_TODO'
      })
    }
  }

  // data () {
  //   const vm = this
  //   return {
  //     dialogShowing: false,

  //     updateValue: vm.todo.title
  //   }
  // },
}
</script>
