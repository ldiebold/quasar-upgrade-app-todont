import generateUid from '../../support/generateUid'
import Vue from 'vue'

export function CREATE_TODO (state, todo) {
  todo.uid = generateUid()
  state.todos.push(todo)
}

export function UPDATE_TODO (state, payload) {
  const todoIndex = state.todos.findIndex(todo => todo.uid === payload.uid)
  const todoToUpdate = state.todos[todoIndex]
  Vue.set(state.todos, todoIndex, { ...todoToUpdate, ...payload.data })
}

export function DELETE_TODO (state, todoUid) {
  state.todos = state.todos.filter(todo => {
    return todo.uid !== todoUid
  })
}

export function DELETE_TODO_BY_TITLE (state, todoTitle) {
  state.todos = state.todos.filter(todo => {
    return todo.title !== todoTitle
  })
}
