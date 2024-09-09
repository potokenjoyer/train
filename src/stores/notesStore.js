import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useNotesStores = defineStore("notes", () => {
  const notes = ref([]);
  let id = 0;
  function addTodo(newTodo) {
    if (newTodo != "") {
      notes.value.push({
        id: id++,
        noteText: newTodo,
        done: false,
        isArchived: false,
        isDeleted: false,
      });
    }
    newTodo = "";
  }

  function archiveTodo(id) {
    notes.value.find((element) => element.id === id).isArchived = true;
  }

  function returnArchivedTodo(id) {
    notes.value.find((element) => element.id === id).isArchived = false;
  }

  function deleteTodo(id) {
    notes.value.find((element) => element.id === id).isDeleted = true;
    notes.value.find((element) => element.id === id).isArchived = false;
  }
  function returnDeletedTodo(id) {
    notes.value.find((element) => element.id === id).isDeleted = false;
  }

  function superDelete(id){
    let idx = notes.value.findIndex((element)=> element.id === id)
    notes.value.splice(idx, 1)
  }
  const filteredNotes = computed(()=>{
    return notes.value.filter((note)=> note.done)
  })

  const filteredArchiveNotes = computed(()=>{
    return notes.value.filter((note)=> note.isArchived)
  })

  const filteredTrashNotes  = computed(()=>{
    return notes.value.filter((note)=> note.isDeleted)
  })


  return {
    archiveTodo,
    notes,
    addTodo,
    returnArchivedTodo,
    deleteTodo,
    returnDeletedTodo,
    superDelete,
    filteredNotes,
    filteredArchiveNotes,
    filteredTrashNotes
  };
});
