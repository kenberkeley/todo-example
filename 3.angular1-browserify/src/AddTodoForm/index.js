module.exports = function () {
  return {
    controller: require('./ctrl'),
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      todos: '='
    },
    template: require('./tpl.html')
  };
};
