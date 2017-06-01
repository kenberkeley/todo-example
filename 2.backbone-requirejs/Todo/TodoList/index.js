define([
  'jquery',
  'underscore',
  'backbone',
  'text!Todo/TodoList/tpl.html', // 模板
  'css!Todo/TodoList/_todos.css' // 样式
], function($, _, Backbone, tpl) {

  
  return Backbone.View.extend({

    tagName: 'ul',

    template: _.template(tpl),
    
    initialize: function (todos) {
      this.todos = todos;
      this.listenTo(this.todos, 'all', this.render); // 自动监听重渲染
    },

    events: {
      'click li': 'handleClick'
    },

    handleClick: function (e) {
      var todoId = $(e.currentTarget).data('id');
      var todo = this.todos.get(todoId);
      todo.set('completed', !todo.get('completed'));
    },

    render: function() {
      this.$el.html(
        this.template({
          todos: this.todos.toJSON()
        })
      );
      return this.el;
    }

  });
  
});
