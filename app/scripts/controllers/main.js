'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    //$scope.todos = ['Item 1','Item 2','Item 3','Item 4'];
    //$scope.todos = [];

    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];

    //wacth is angular service , it keep watches the scope object and invoke the respective listeners if object changes
   //$watch listener to watch for changes in the value of $scope.todos. If someone adds or removes a todo, it will then keep our local storage todos datastore in sync.
    $scope.$watch('todos',function(){
        localStorageService.set('todos',$scope.todos);
    },true);
    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo ='';
    };

    $scope.removeTodo = function(index){
      $scope.todos.splice(index,1);
    };
  });
