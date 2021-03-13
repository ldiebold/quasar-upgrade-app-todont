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
          v-model:pagination="pagination"
          flat
          :columns="columns"
          :rows="todonts"
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
const { mapGetters } = createNamespacedHelpers('todonts')

export default {
  data () {
    return {
      showDialog: false,

      columns: [
        {
          label: 'Todont Title',
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
      todonts: 'getTodonts'
    }),

    pagesNumber () {
      return Math.ceil(this.todonts.length / this.pagination.rowsPerPage)
    }
  }
}
</script>
