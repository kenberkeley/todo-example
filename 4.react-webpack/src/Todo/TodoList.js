import React, { Component } from 'react'
import injectSheet from 'react-jss'

// CSS in JS
const styles = {
  finished: {
    color: 'gray',
    textDecoration: 'line-through'
  },
  unfinished: {
    color: 'red',
    fontWeight: 'bold'
  }
}

@injectSheet(styles)
export default class TodoList extends Component {
  render () {
    const { todos, handleClick, classes } = this.props
    return (
      <ul>
        { todos.map(todo => 
          <li key={todo.id}
            onClick={() => handleClick(todo.id)}
            className={todo.completed ? classes.finished : classes.unfinished}>
            { todo.text }
          </li>
        )}
      </ul>
    )
  }
}
