export const state = () => ({
    /* User */
    data: null,
    total: 0
  })
  
  export const mutations = {
    /* A fit-them-all commit */
    data (state, payload) {
      state.data = payload
    },
    total (state, payload) {
      state.total = payload
    }
  }
  