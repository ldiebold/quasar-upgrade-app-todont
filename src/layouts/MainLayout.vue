<template>
  <q-layout
    view="lHh Lpr lFf"
    @scroll="handleScroll"
    @keyup.enter="makeDummyData"
  >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          ToDon't
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>

        <q-select
          v-model="language"
          dense
          dark
          borderless
          input-class="text-white"
          class="q-ml-lg"
          :options="['en-us', 'en-au']"
          @input="handleLanguageSelectInput"
        >
          <template #option="scope">
            <q-item
              v-bind="scope.itemProps"
              v-on="scope.itemEvents"
            >
              <q-item-section avatar>
                <q-icon name="flag" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <site-brand-color-select
          placeholder="Site Color"
          class="q-ml-lg"
          dense
          dark
          borderless
          input-class="text-white"
          style="width: 75px;"
        />

        <div class="q-ml-md">
          {{ $t('welcome') }}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-primary"
    >
      <main-menu-list />
    </q-drawer>

    <q-page-container>
      <router-view />

      <q-page-sticky
        :offset="[12,12]"
        position="top-left"
      >
        <q-btn
          v-if="$route.path !== '/pages'"
          v-go-back="'/pages'"
          round
          icon="home"
        />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import SiteBrandColorSelect from 'components/SiteBrandColorSelect.vue'
import MainMenuList from 'components/MainMenuList.vue'

export default {
  name: 'MainLayout',

  components: {
    SiteBrandColorSelect,
    MainMenuList
  },

  data () {
    return {
      leftDrawerOpen: false,
      language: 'en-us'
    }
  },

  methods: {
    makeDummyData () {
      console.log('sdfgsd')
    },

    handleLanguageSelectInput (language) {
      this.$i18n.locale = language
    },

    handleScroll (data) {
      console.log(data)
    }
  }
}
</script>
