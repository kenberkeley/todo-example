module.exports = function () {
  return {
    controller: require('./ctrl'),
    controllerAs: 'ctrl',
    bindToController: true,
    template: require('./tpl.html')
  };
};
