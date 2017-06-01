define([
  'jquery',
  'underscore',
  'backbone',
  'Todo/TodoList/index',
  'Todo/AddTodoForm/index'
], function ($, _, Backbone, TodoList, AddTodoForm) {

  // 定义模型
  var todoModel = Backbone.Model.extend({
    idAttribute: 'id',
    defaults: {
      id: String,
      text: String,
      completed: Boolean
    }
  });

  // 定义集合
  var todoCollection = Backbone.Collection.extend({
    model: todoModel
  });

  return Backbone.View.extend({

    initialize: function () {
      // 实例化集合
      this.todos = new todoCollection();

      // 把集合传入到 TodoList 与 AddTodoForm 的组件实例
      this.todoList = new TodoList(this.todos);
      this.addTodoForm = new AddTodoForm(this.todos);
    },

    render: function () {
      this.$el
        .append(this.todoList.render())
        .append(this.addTodoForm.render());

      return this.el;
    }

  });

});
