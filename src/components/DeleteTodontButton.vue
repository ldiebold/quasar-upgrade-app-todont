<template>
  <q-btn
    flat
    icon="delete"
    @click="deleteTodont(todont.uid)"
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
const { mapMutations } = createNamespacedHelpers('todonts')

export default {

  components: {

  },
  props: {
    todont: {
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
      deleteTodont: 'DELETE_TODONT'
    })
  }
}

</script>
