<template>
  <q-dialog
    ref="dialog"
    @hide="onDialogHide"
  >
    <q-card
      class="q-dialog-plugin flex flex-center"
      :style="{
        borderRadius: circle ? '50%' : '6px',
        width: '300px',
        height: '300px'
      }"
    >
      <q-card-section class="q-mt-lg text-center">
        {{ message }}

        <!-- buttons example -->
        <div class="text-center q-mt-md">
          <q-btn
            color="primary"
            label="OK"
            @click="onOKClick"
          />
          <q-btn
            color="primary"
            label="Cancel"
            class="q-ml-sm"
            @click="onCancelClick"
          />
          <q-btn
            color="primary"
            label="Show Vuex Store"
            class="q-ml-sm"
            @click="logVuexStore"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    message: {
      required: false,
      default: '',
      type: String
    },

    circle: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  emits: [
    'hide',
    'ok'
  ],

  mounted () {
    console.log(this)
  },

  methods: {
    logVuexStore () {
      console.log(this.$store)
    },

    show () {
      this.$refs.dialog.show()
    },

    hide () {
      this.$refs.dialog.hide()
    },

    onDialogHide () {
      this.$emit('hide')
    },

    onOKClick () {
      this.$emit('ok')
      this.hide()
    },

    onCancelClick () {
      this.hide()
    }
  }
}
</script>
