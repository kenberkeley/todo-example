(function () {
  var todos = [/*{ id: <Number>, text: <String>, completed: <Boolean> }*/];

  function render() {
    var renderStr = '';
    todos.forEach(function (todo) {
      renderStr += '<li data-id="' + todo.id + '" class="' + (todo.completed ? 'finished' : 'unfinished') + '">' +
        todo.text +
      '</li>';
    });
    $('#todo-list').html(renderStr);
  }
  render(); // 初始化渲染

  $('#add-todo-form').on('submit', function (e) {
    e.preventDefault();

    var $input = $('#new-todo-text');
    var text = $input.val();
    
    if (!text) return alert('内容不能为空');
    todos.push({
      id: uuid(),
      text: text,
      completed: false
    });
    
    $input.val(''); // 清空输入框
    render(); // 重新渲染
  });

  $('#todo-list').on('click', 'li', function () {
    var todoId = $(this).data('id');
    todos.forEach(function (todo) {
      if (todo.id == todoId) {
        todo.completed = !todo.completed;
      }
    });
    render(); // 重新渲染
  });
})();
