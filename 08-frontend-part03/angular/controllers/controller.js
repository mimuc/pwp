
angular
    .module('pwp.controller.todo', [])
    .controller('TodoController',  TodoController);

TodoController.$inject = ['$scope', 'getDataFactory', 'userFactory'];


function TodoController($scope, getDataFactory, userFactory){

    console.log("todoController is called");


  /*      $scope.todo = {
            user: "Alfred",
            items: [
                {action: "buy flowers", done: false},
                {action: "to homework", done: false},
                {action: "call cindy", done: false}
            ]
        }*/

        $scope.todo = getDataFactory.getData();




        userFactory.getUsers().success(function (data, status) {
            $scope.users = data;
            console.log("UserObject: " + data[0].displayName);
            
        });


        $scope.incompleteCount = function(){
            var count = 0;
            angular.forEach($scope.todo.items, function(item){
                if (!item.done) {count ++}
            });
            console.log("incomplete:" + count);
            return count;

        }
}