var uuid = require('uuid');

function AddTodoFormCtrl() {
  var vm = this;
  
  vm.text = '';

  vm.handleSubmit = function () {
    if (!vm.text) return alert('输入内容为空');
    vm.todos.push({
      id: uuid(),
      text: vm.text,
      completed: false
    });
    vm.text = '';
  };
}

module.exports = AddTodoFormCtrl;
