<template>
  <ul>
    <li v-for="todo in todos" @click="$emit('click', todo.id)"
      :class="todo.completed ? 'finished' : 'unfinished'">
      {{ todo.text }}
    </li>
  </ul>
</template>
<script>
export default {
  props: ['todos']
}
</script>
<style>
.finished {
  color: gray;
  text-decoration: line-through;
}
.unfinished {
  color: red;
  font-weight: bold;
}
</style>
