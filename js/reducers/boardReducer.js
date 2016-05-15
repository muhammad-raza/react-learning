const boardReducer = (state = {notes:[]}, action) => {	
	switch(action.type){
		case 'ADD_NOTE':
			var note = state.notes.slice(0);
		    note.push({id:action.id, todos:action.todos});
		    return Object.assign({}, state, {notes : note});
		case 'REMOVE_NOTE':	
			var notes = state.notes.slice(0).filter((note)=>{return note.id !== action.id});			
			return Object.assign({}, state, {notes : notes});				
	    default:
	    	return state;
	}  
}

export default boardReducer;
