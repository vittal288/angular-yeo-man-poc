'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  */

/*
  it('should have no items to start',function(){
    expect(scope.todos.length).toBe(0);
  })
*/

  it('shold have no items to start',function(){
      expect(scope.todos.length).toBe(0);
  });

  //add item
  it('shold add item to the list',function(){
      scope.todo ='Test Item';
      scope.addTodo();
      expect(scope.todos.length).toBe(1);
  });

  //remove item
  it('should remove an item from the list',function(){
    scope.todo='Test Item';
    scope.removeTodo();
    expect(scope.todos.length).toBe(0);
  });


  //add and remove at a time
  it('should add and remove the item',function(){
    scope.todo='test item';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });


});
