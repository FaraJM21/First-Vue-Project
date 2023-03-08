<template>
  <div>
    <h2>Todo App</h2>
    <AddTodo @add-todo="addTodo" />
    <hr />
    <TodoList :todos="todos" @removeItem="removeTodo" />
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import AddTodo from "../components/AddTodo.vue";
export default {
  components: {
    TodoList,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
      });
  },

  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>
