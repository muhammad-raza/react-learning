let nextNoteId = 1
export const addNote = () => {
  return {
  	id: nextNoteId++,
    type: 'ADD_NOTE',    
    todos: []
  }
}