// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_POLEMON2 = 'UPDATE_POLEMON2'

// ------------------------------------
// Actions
// ------------------------------------
export function updatePokemon (data) {
  return {
    type    : UPDATE_POLEMON2,
    data
  }
}

export const actions = {
  updatePokemon,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_POLEMON2] : (state, action) => {
    return {
      ...state,
      ...action.data,
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  name: '預設值',
  img: '',
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
