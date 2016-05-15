let nextTodoId = 1;
export const addTodo = (noteId) => {
	var todo = {id:nextTodoId, todo:'something'};
	return {
		id: noteId,
		type: 'ADD_TODO',    
		todos: todo
	}
}

export const removeNote = (noteId) => {	
  return {
  	id: noteId,
    type: 'REMOVE_NOTE'    
  }
}