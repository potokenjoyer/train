import { defineStore } from "pinia";
import { ref } from "vue";
export const useNotesStores = defineStore("notes", () => {
  const notes = ref([]);
  function addTodo(newTodo) {
    if (newTodo != "") {
      notes.value.push({ noteText: newTodo, done: false });
      newTodo = "";
    }
  }
  const archiveNotes = ref([]);
  function archiveTodo(idx) {
    return archiveNotes.value.push(...notes.value.splice(idx, 1));   
  }

  return {
    archiveNotes,
    archiveTodo,
    notes,
    addTodo
  };
});
