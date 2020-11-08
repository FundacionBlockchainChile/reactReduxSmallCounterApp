import * as actionTypes from './actions';

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat(action.newPerson),
      };

    case actionTypes.DELETE_PERSON:
      const updatedArray = state.persons.filter(
        (person) => person.id !== action.personId
      );
      return {
        ...state,
        persons: updatedArray,
      };
  }
};

export default reducer;
