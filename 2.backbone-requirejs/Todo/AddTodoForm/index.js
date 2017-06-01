define([
  'jquery',
  'underscore',
  'backbone',
  'uuid',
  'text!Todo/AddTodoForm/tpl.html' // 模板
], function($, _, Backbone, uuid, tpl) {

  return Backbone.View.extend({

    tagName: 'form',

    template: _.template(tpl),

    initialize: function (todos) {
      this.todos = todos;
    },

    events: {
      'submit': 'handleSubmit'
    },

    handleSubmit: function (e) {
      e.preventDefault();
      var $input = this.$el.find('input');
      var text = $input.val();

      if (!text) return alert('内容不能为空');
      this.todos.add({
        id: uuid(),
        text: text,
        completed: false
      });

      $input.val('');
    },

    render: function() {
      this.$el.html(this.template());
      return this.el;
    }

  });
  
});
