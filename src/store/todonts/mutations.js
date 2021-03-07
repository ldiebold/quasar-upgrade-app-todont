import generateUid from '../../support/generateUid'

export function CREATE_TODONT (state, todont) {
  todont.uid = generateUid()
  state.todonts.push(todont)
}

/**
 * TODO: Check this works
 */
export function UPDATE_TODONT (state, payload) {
  const todontIndex = state.todonts.findIndex(todont => todont.uid === payload.uid)
  const todontToUpdate = state.todonts[todontIndex]
  state.todonts[todontIndex] = { ...todontToUpdate, ...payload.data }
}

export function DELETE_TODONT (state, todontUid) {
  state.todonts = state.todonts.filter(todont => {
    return todont.uid !== todontUid
  })
}

export function DELETE_TODONT_BY_TITLE (state, todontTitle) {
  state.todonts = state.todonts.filter(todont => {
    return todont.title !== todontTitle
  })
}
