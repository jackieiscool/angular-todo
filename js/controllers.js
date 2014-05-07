app.controller('TodosController', function($scope) {
  $scope.todos = [];
  $scope.newTodo = '';

  $scope.addTodo = function() {
    if ($scope.newTodo.length == 0) {
      return
    }
    else {
      $scope.todos.push($scope.newTodo);
    }
    $scope.newTodo = '';
  };
});