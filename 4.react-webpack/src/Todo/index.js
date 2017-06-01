import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import uuid from 'uuid'

export default class Todo extends Component {

  constructor (props) {
    super(props)
    this.state = {
      todos: [] // [{ id: <Number>, text: <String>, completed: <Boolean> }]
    }
  }

  handleClick (todoId) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  handleSubmit (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false
        }
      ]
    })
  }

  render () {
    const { todos } = this.state
    return (
      <div>
        <TodoList todos={todos} handleClick={this.handleClick.bind(this)} />
        <AddTodoForm todos={todos} handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }

}
