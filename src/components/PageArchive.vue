<template>
  <div class="container pt">
    <div class="mb-4">
      <h1>ARCHIVE</h1>
      <div class="mb-5">
        <el-button
          type="warning"
          @click="$router.push('/')"
          circle
          :icon="Star"
          size="large"
        ></el-button>
        <el-button
          type="danger"
          :icon="Delete"
          circle
          size="large"
          @click="$router.push('/trash')"
        />
      </div>
    </div>
    <div class="form-control">
      <hr />
      <h1>Общее количество: {{ notesStore.filteredArchiveNotes.length }}</h1>
      <hr />
    </div>

    <ul class="list">
      <li
        class="list-item"
        v-for="todo in notesStore.notes.filter((item) => {
          return item.isArchived && item.isDeleted === false;
        })"
      >
        <div class="div-container">
          <input type="checkbox" class="checkbox-input" v-model="todo.done" />
          <span :class="{ done: todo.done }">
            {{ todo.noteText }}
          </span>
        </div>
        <div>
          <el-button
            type="primary"
            @click="notesStore.returnArchivedTodo(todo.id)"
            >Return</el-button
          >
          <el-button type="danger" @click="notesStore.deleteTodo(todo.id)"
            >Delete</el-button
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useNotesStores } from "@/stores/notesStore";
import { Delete, Star } from "@element-plus/icons-vue";

const notesStore = useNotesStores();
</script>

<style>
.btn-arch {
  color: #ffffff;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #42b983;
  transition: all 0.22s;
}
.checkbox-input {
  margin-right: 10px;
}
.div-container {
  display: flex;
}
.done {
  text-decoration: line-through;
}
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 24px;
}

.btn-add {
  color: #ffffff;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #42b983;
  transition: all 0.22s;
}
.btn-add:hover {
  cursor: pointer;
  opacity: 0.8;
}
.btn-arch:hover {
  cursor: pointer;
  opacity: 0.8;
}
.btn-ret:hover {
  cursor: pointer;
  opacity: 0.8;
}
.btn-dlt:hover {
  cursor: pointer;
  opacity: 0.8;
}
.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.form-control input {
  margin-top: 0.5rem;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  color: #ffffff;
  background-color: black;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  font-size: 24px;
}

* {
  box-sizing: border-box;
}

body {
  font-size: 16px;
}

h1 {
  font-size: 2.2rem;
  font-weight: 600;
}

.primary {
  color: #42b983;
}

.danger {
  color: #e53935;
}

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn-dlt {
  color: #ffffff;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #9b3030;
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn_holder {
  display: flex;
  justify-content: space-around;
}

.btn.primary {
  background: #42b983;
  color: #fff;
}

.btn.danger {
  background: #e53935;
  color: #fff;
  border-color: #e53935;
}

.pt-5 {
  padding-top: 5rem;
}

.container {
  width: 50%;
  margin: 0 auto;
  max-width: 1000px;
}
.card {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(22, 255, 80, 0.2);
  margin-bottom: 2rem;
}

hr {
  margin: 1rem 0;
}
</style>
