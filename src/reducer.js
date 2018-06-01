let initial_state = {
    houses:[]
  }

  export default function reducer(state=initial_state, action) {
    switch(action.type) {
      case ADD:
        return Object.assign({}, state, {houses: action.payload})
      default:
        return state;
    }
  }
  export function addhouse() {
    return {
      type: ADD,
      payload: house
    }
  }
  
  export function actionChangeCreator(num) {
    return {
      type: CHANGE,
      payload: num
    }
  }