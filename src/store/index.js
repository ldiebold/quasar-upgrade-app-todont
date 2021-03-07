// default src/store/index.js content:
import { createStore } from 'vuex'
import todonts from './todonts'

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      todonts
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
}
