<template>
  <q-btn
    flat
    icon="delete"
    @click="deleteTodo(todo.uid)"
  >
    <template
      v-for="(_, slot) of $scopedSlots"
      v-slot:[slot]="scope"
    >
      <slot
        :name="slot"
        v-bind="scope"
      />
    </template>
  </q-btn>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('todos')

export default {

  components: {

  },
  props: {
    todo: {
      required: true,
      type: Object
    }
  },

  data () {
    return {

    }
  },

  computed: {

  },

  methods: {
    ...mapMutations({
      deleteTodo: 'DELETE_TODO'
    })
  }
}

</script>
