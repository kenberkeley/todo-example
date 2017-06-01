<template>
  <div>
    <todo-list :todos="todos" @click="handleClick" />
    <add-todo-form @submit="handleSubmit" />
  </div>
</template>
<script>
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import uuid from 'uuid'

export default {
  components: { TodoList, AddTodoForm },
  data: () => ({
    // { id: <Number>, text: <String>, completed: <Boolean> }
    todos: []
  }),
  methods: {
    handleClick (todoId) {
      this.todos = this.todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }
        return todo
      })
    },
    handleSubmit (text) {
      this.todos.push({
        id: uuid(),
        text,
        completed: false
      })
    }
  }
}
</script>
