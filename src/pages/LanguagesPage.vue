<template>
  <q-page
    padding
  >
    <q-card
      class="q-mt-xl q-ml-md"
      style="max-width: 350px;"
    >
      <q-card-section>
        <q-select
          v-model="lang"
          :options="langOptions"
          label="Quasar Language"
          filled
          emit-value
          map-options
          options-dense
          style="min-width: 150px"
        />
      </q-card-section>
    </q-card>

    <q-card
      class="q-mt-md q-ml-md"
      style="max-width: 650px;"
    >
      <q-card-section>
        <pre>{{ $q.lang }}</pre>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import languages from 'quasar/lang/index.json'
const appLanguages = languages.filter(lang =>
  ['de', 'en-us', 'es', 'fr'].includes(lang.isoName)
)

export default {
  data () {
    return {
      lang: this.$q.lang.isoName
    }
  },

  watch: {
    lang (lang) {
      // dynamic import, so loading on demand only
      import(
        /* webpackInclude: /(de|en-us|es|fr)\.js$/ */
        'quasar/lang/' + lang
      ).then(lang => {
        this.$q.lang.set(lang.default)
      })
    }
  },

  created () {
    this.langOptions = appLanguages.map(lang => ({
      label: lang.nativeName, value: lang.isoName
    }))
  }
}
</script>
