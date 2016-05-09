const boardReducer = (state = {notes:[]}, action) => {
  if (action.type === 'ADD_NOTE'){    
    var note = state.notes.slice(0);
    note.push({id:action.id, todos:action.todos});
    return Object.assign({}, state, {notes : note});
  }
  return state;
}

export default boardReducer;
