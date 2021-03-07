<template>
  <q-select
    v-model="model"
    v-bind="$attrs"
    :options="options"
    @update:modelValue="setSiteColor"
  >
    <template #option="scope">
      <q-item
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section avatar>
          <q-icon
            :style="`color: ${scope.opt.hexColor};`"
            name="circle"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import { colors } from 'quasar'
const { setBrand } = colors

export default {
  data () {
    return {
      model: {
        label: 'blue',
        value: 'blue',
        hexColor: '#5370cf'
      },

      options: [
        {
          label: 'blue',
          value: 'blue',
          hexColor: '#5370cf'
        },
        {
          label: 'green',
          value: 'green',
          hexColor: '#53cf61'
        },
        {
          label: 'red',
          value: 'red',
          hexColor: '#cf6853'
        },
        {
          label: 'orange',
          value: 'orange',
          hexColor: '#cfaa53'
        },
        {
          label: 'purple',
          value: 'purple',
          hexColor: '#9d53cf'
        }
      ]
    }
  },

  methods: {
    setSiteColor ({ hexColor }) {
      setBrand('primary', hexColor)
    }
  }
}
</script>
