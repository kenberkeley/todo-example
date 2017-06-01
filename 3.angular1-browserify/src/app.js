var angular = require('angular');

angular.module('todoApp', [])
  .directive('todo', require('./Todo/'))
  .directive('todoList', require('./TodoList/'))
  .directive('addTodoForm', require('./AddTodoForm/'));
