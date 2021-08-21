interface ActionType {
  type: string;
  payload: string | number;
}

const notesReducer = (state: any = [], action: ActionType) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default notesReducer;
