import * as actionTypes from './constants'
const initialStore = {
  counter: 100
}

function reducer(state = initialStore,action){
  switch (action.type){
    case actionTypes.ADD_NUMBER:
      return {...state,counter: state.counter + action.num}
    case actionTypes.SUB_NUMBER:
      return {...state,counter: state.counter - action.num}
    default:
      return state
  }
}

export default reducer
