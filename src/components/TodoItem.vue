<template>
  <li>
    <span :class="{ done: todo.completed }">
      <input type="checkbox" @change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }} {{ todo.title }}</strong>
    </span>

    <button class="rm" @click="$emit('removeItem', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 16px;
}
.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}

input {
  margin-right: 16px;
}
</style>
