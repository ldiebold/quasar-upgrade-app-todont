export function getTodonts (state) {
  return state.todonts
}

export function filterTodonts (state, filterString) {
  if (!filterString) { return state.todonts }

  return state.todonts.filter(todont => {
    return todont.title.toLowerCase().includes(filterString.toLowerCase())
  })
}

export function getTodontCount (state) {
  return state.todonts.length
}

export function findTodont (state, todontUid) {
  return state.todonts.find(todont => todont.uid === todontUid)
}
