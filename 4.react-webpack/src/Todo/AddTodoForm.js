import React, { Component } from 'react'

export default class AddTodoForm extends Component {
  
  constructor (props) {
    super(props)
    this.state = { text: '' }
  }

  setInputText (text) {
    this.setState({ text })
  }

  handleSubmit () {
    const { text } = this.state
    if (!text) return alert('输入内容为空')
    this.props.handleSubmit(text)
    this.setInputText('')
  }

  render () {
    return (
      <form onSubmit={
        e => {
          e.preventDefault()
          this.handleSubmit()
        }
      }>
        <input type="text" value={this.state.text} required
          onChange={e => this.setInputText(e.target.value)} />
        <button type="submit">新增</button>
      </form>
    )
  }

}
