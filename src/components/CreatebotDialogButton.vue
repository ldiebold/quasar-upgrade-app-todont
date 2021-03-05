<template>
  <q-btn
    v-bind="$attrs"
    @click="dialogVisible = true"
  >
    <q-dialog v-model="dialogVisible">
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
            label-sanitize
            :label="`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`"
          />
          <q-chat-message
            :text="[
              '<strong>Try these commands: </strong>',
              '- create todo: go shopping',
              '- delete todo: tell Shannen I love her'
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
const { mapMutations } = createNamespacedHelpers('todos')

import { scroll } from 'quasar'
const { getScrollHeight, setScrollPosition } = scroll

export default {
  data () {
    const vm = this
    return {
      dialogVisible: false,

      now: new Date(),

      currentMessage: '',

      messages: [],

      actions: {
        'create todo': vm.createTodo,
        'delete todo': vm.deleteTodo
      }
    }
  },

  methods: {
    ...mapMutations(['DELETE_TODO_BY_TITLE', 'CREATE_TODO']),

    createTodo (todoTitle) {
      this.CREATE_TODO({
        title: todoTitle
      })

      this.createMessage('todo created!', 'sent')
    },

    deleteTodo (todoTitle) {
      this.DELETE_TODO_BY_TITLE(todoTitle)
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
        setScrollPosition(scrollAreaElement, getScrollHeight(scrollAreaElement))
      })
    }
  }
}
</script>
