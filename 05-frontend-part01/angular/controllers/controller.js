
angular
    .module('demoApp')  //the main module - rootScope
    .controller('contactController', ['$scope', contactController]);  //the controller

function contactController($scope){

    console.log("contactController is called");

        
        //Create Objects
        var person1 ={'name': 'Schmidt', 'firstName': 'Claudia', 'mail': 'abc@def.de'};
        var person2 ={'name': 'Müller', 'firstName': 'Horst', 'mail': '123@def.de'};
        //push them into an aray and provide this array to the object $scope.persons  in order to refer to it from the view
        $scope.persons = [person1, person2];

    $scope.person ="Horst";
}