export function getTodos (state) {
  return state.todos
}

export function filterTodos (state, filterString) {
  if (!filterString) { return state.todos }

  return state.todos.filter(todo => {
    return todo.title.toLowerCase().includes(filterString.toLowerCase())
  })
}

export function getTodoCount (state) {
  return state.todos.length
}

export function findTodo (state, todoUid) {
  return state.todos.find(todo => todo.uid === todoUid)
}
