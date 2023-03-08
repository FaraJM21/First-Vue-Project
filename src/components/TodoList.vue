<template>
  <div>
    <ul>
      <TodoItem 
      v-for="(todo, i) of todos" 
      :index="i"
      :todo="todo" 
      @removeItem="removeTodo" />
    </ul>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },

  methods: {
    removeTodo(id) {
      this.$emit("removeItem", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
