<template>
  <q-page
    class="row justify-center"
  >
    <q-card
      ref="todontListCard"
      class="col-sm-12 col-md-5"
    >
      <!-- Todonts -->
      <q-list class="full-height">
        <q-item-label header>
          Todon'ts
        </q-item-label>

        <div
          v-if="todonts.length <= 0"
          class="q-pa-md"
        >
          No todon'ts, go ahead and
          <create-todont-button
            flat
            dense
            no-caps
            style="margin-top: -2px;"
            color="blue"
            label="create one!"
          />
        </div>

        <q-item
          v-for="todont in todonts"
          :key="todont.uid"
        >
          <q-item-section>
            {{ todont.title }}
            <update-todont-popup-edit
              :todont="todont"
              @update-success="handleUpdateSuccess"
            />
          </q-item-section>
          <q-item-section side>
            <delete-todont-button :todont="todont" />
          </q-item-section>
        </q-item>
      </q-list>
      <!-- Advertisement Banner -->
      <advert-banner
        v-if="showBanner"
        class="bg-red-5 text-white"
      >
        50% OFF RARE THING YOU REALLY NEED!!!

        <template #action>
          <q-btn
            label="buy (don't think)"
            flat
          />

          <q-btn
            icon="close"
            flat
            @click="showBanner = false"
          />
        </template>
      </advert-banner>
    </q-card>

    <q-scroll-observer
      ref="scrollObserver"
      @scroll="onListScroll"
    />

    <!-- Table View FAB -->
    <q-page-sticky
      position="top-right"
      :offset="[22, 22]"
    >
      <show-as-table-button
        fab
        icon="table_view"
      />
    </q-page-sticky>

    <!-- Create TODONT FAB -->
    <q-page-sticky :offset="[22, 22]">
      <create-todont-button
        :icon="$q.iconSet.fab.icon"
        fab
        color="primary"
      />
    </q-page-sticky>

    <!-- CreateBot Dialog Button -->
    <q-page-sticky
      position="bottom-left"
      :offset="[22, 22]"
    >
      <createbot-dialog-button
        icon="message"
        fab
        color="primary"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import CreateTodontButton from 'components/CreateTodontButton.vue'
import DeleteTodontButton from 'components/DeleteTodontButton.vue'
import UpdateTodontPopupEdit from 'components/UpdateTodontPopupEdit.vue'
import AdvertBanner from 'components/AdvertBanner.vue'
import CreatebotDialogButton from 'components/CreatebotDialogButton.vue'
import ShowAsTableButton from 'components/ShowAsTableButton.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapMutations } = createNamespacedHelpers('todonts')

export default {
  name: 'PageIndex',

  components: {
    CreateTodontButton,
    DeleteTodontButton,
    UpdateTodontPopupEdit,
    AdvertBanner,
    CreatebotDialogButton,
    ShowAsTableButton
  },

  data () {
    return {
      showBanner: false
    }
  },

  computed: {
    ...mapGetters({
      todonts: 'getTodonts'
    })
  },

  mounted () {
    this.listenForHotkeys()

    this.showBannerIn15Seconds()
  },

  methods: {
    ...mapMutations({
      createTodont: 'CREATE_TODONT'
    }),

    listenForHotkeys () {
      const vm = this
      document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'm') {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].forEach(num => {
            vm.createTodont({
              title: num
            })
          })
        }
      })
    },

    showBannerIn15Seconds () {
      setTimeout(() => {
        this.showBanner = true
      }, 15000)
    },

    onListScroll (information) {
      // console.log(information)
    },

    handleUpdateSuccess () {
      this.$q.notify({
        message: 'Item Updated',
        color: 'green'
      })
    },

    makeDummyData () {
      console.log('make')
    }
  }
}
</script>
