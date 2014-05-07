var app = angular.module('myApp', []);

app.controller('TodosController', function($scope) {
  $scope.todos = [];

  $scope.addTodo = function(todo) {
    $scope.todos.push(todo);
  };
});

// app.controller('NewTodoController', function($scope) {
//   $scope.addTodo = function(todo) {

//   };
// }).
// controller('TodoListController', function($scope){

// });
