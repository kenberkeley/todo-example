require('./_todo.css');

function TodoListCtrl() {
  var vm = this;

  vm.handleClick = function (todoId) {
    vm.todos = vm.todos.map(function (todo) {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  };
}

module.exports = TodoListCtrl;
