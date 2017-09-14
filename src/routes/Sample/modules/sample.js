// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_POLEMON = 'UPDATE_POLEMON'

// ------------------------------------
// Actions
// ------------------------------------
export function updatePokemon (data) {
  return {
    type    : UPDATE_POLEMON,
    data
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  updatePokemon,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_POLEMON] : (state, action) => {
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
