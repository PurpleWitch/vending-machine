// Creates the Redux variables
const initState = {
  inputMoney: 0,
};

// Edits the Redux variables
var rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, inputMoney: state.inputMoney+action.add };    
    case 'reset':
      return { ...state, inputMoney: 0 };
    default:
      return state;
  }
};

export default rootReducer;
