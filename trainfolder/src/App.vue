<template>
  <div class="container pt-5">
    <div class="card">
      <h1>{{ message }} {{ count }}</h1>
      <div class="btn_holder">
        <button @click="plus" class="btn primary">+</button>
        <button @click="minus" class="btn danger">-</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const count = ref(0);

function plus() {
  count.value++;
}
function minus() {
  if (count.value > 0) {
    count.value--;
  }
}

const message = reactive("Количество:");
</script>

<style>
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

.card {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(22, 255, 80, 0.2);
}
</style>
