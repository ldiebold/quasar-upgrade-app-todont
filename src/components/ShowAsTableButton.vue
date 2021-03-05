<template>
  <q-btn
    v-bind="$attrs"
    @click="showDialog = true"
  >
    <q-dialog
      v-model="showDialog"
    >
      <div class="bg-white">
        <q-table
          flat
          :columns="columns"
          :data="todos"
          :pagination.sync="pagination"
          hide-pagination
        />

        <div class="row justify-center q-mt-md">
          <q-pagination
            v-model="pagination.page"
            color="grey-8"
            :max="pagesNumber"
            size="md"
          />
        </div>
      </div>
    </q-dialog>
  </q-btn>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('todos')

export default {
  data () {
    return {
      showDialog: false,

      columns: [
        {
          label: 'Todo Title',
          field: 'title',
          align: 'left'
        }
      ],

      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 3
      }
    }
  },

  computed: {
    ...mapGetters({
      todos: 'getTodos'
    }),

    pagesNumber () {
      return Math.ceil(this.todos.length / this.pagination.rowsPerPage)
    }
  }
}
</script>
