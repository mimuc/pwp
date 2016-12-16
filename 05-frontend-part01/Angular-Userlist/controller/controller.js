angular
.module('pwp.controller.todo', [])
.controller('TodoController', TodoController);

function TodoController($scope){

    $scope.todo ={
        user:"Alfred",
        items:[
        {action:"Angular lernen", ready:true,  done: false},
            {action: "Schlafen", ready:true,  done: false},
            {action:"Aufräumen", ready:false, done: false}
    ]
    }


    $scope.incompleteCount = function (){
        var count=0;

        angular.forEach($scope.todo.items, function(item){
            if(!item.done) {count ++}
        });
        return count;

    }

}