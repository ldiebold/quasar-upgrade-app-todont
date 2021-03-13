<template>
  <q-btn
    v-bind="$attrs"
    @click="dialogVisible = true"
  >
    <q-dialog
      v-model="dialogVisible"
    >
      <q-card
        :style="{
          width: '450px',
          maxWidth: '100vw'
        }"
      >
        <q-card-section
          ref="messageScrollArea"
          :style="{
            maxHeight: '80vh',

          }"
          class="scroll"
        >
          <q-chat-message
            :label="`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`"
          />
          <q-chat-message
            text-html
            :text="[
              '<strong>Try these commands: </strong>',
              '- create todont: Tell Shannen I love her',
              '- delete todont: fall in love'
            ]"
          >
            <template #avatar>
              <q-avatar>
                <q-img src="~assets/quasar-logo.svg" />
              </q-avatar>
            </template>
          </q-chat-message>

          <q-chat-message
            v-for="message in messages"
            :key="message.id"
            name-html
            :name="message.sent ? '<strong>QuaBot</strong>' : '<strong>You</strong>'"
            :sent="message.sent"
            :text="[message.text]"
          />
        </q-card-section>

        <div class="row">
          <q-input
            v-model="currentMessage"
            class="col"
            input-class="q-pr-xl"
            filled
            dense
            @keypress.enter="handleSendClicked"
          />
          <q-btn
            id="sendButton"
            color="primary"
            icon="send"
            @click="handleSendClicked"
          />
        </div>
      </q-card>
    </q-dialog>
  </q-btn>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('todonts')

import { scroll } from 'quasar'
const { getScrollHeight, setVerticalScrollPosition } = scroll

export default {
  data () {
    const vm = this
    return {
      dialogVisible: false,

      now: new Date(),

      currentMessage: '',

      messages: [],

      actions: {
        'create todont': vm.createTodont,
        'delete todont': vm.deleteTodont
      }
    }
  },

  methods: {
    ...mapMutations(['DELETE_TODONT_BY_TITLE', 'CREATE_TODONT']),

    createTodont (todontTitle) {
      this.CREATE_TODONT({
        title: todontTitle
      })

      this.createMessage('todont created!', 'sent')
    },

    deleteTodont (todontTitle) {
      this.DELETE_TODONT_BY_TITLE(todontTitle)
      this.createMessage('Okay, Deleted :)', 'sent')
    },

    handleSendClicked () {
      this.createMessage(this.currentMessage, false)
      const splitByColon = this.currentMessage.split(':')
      const action = splitByColon[0]
      if (splitByColon.length > 1 && this.actions[action]) {
        const param = splitByColon[1].trimStart()
        this.actions[action](param)
      } else {
        this.createMessage("I don't understand that action :(", true)
      }

      this.currentMessage = ''
    },

    createMessage (text, sent) {
      this.messages.push({
        id: Math.floor(Math.random() * (999999 - 1) + 1),
        sent,
        text
      })

      this.$nextTick(() => {
        const scrollAreaElement = this.$refs.messageScrollArea.$el
        setVerticalScrollPosition(scrollAreaElement, getScrollHeight(scrollAreaElement))
      })
    }
  }
}
</script>
