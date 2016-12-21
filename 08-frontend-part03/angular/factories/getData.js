

    angular.module('pwp.factories.getData', [])
        .factory('getDataFactory', GetDataFactory);



    function GetDataFactory() {
        console.log("Factory is called");

        var factory = {
            user: "Alfred",
            items: [
                {action: "buy flowers", done: false},
                {action: "to homework", done: false},
                {action: "call cindy", done: false}
            ]
        };


        factory.getData = function(){
            return factory;
        }

        factory.getUser= function(){
            return factory.user;
        }

        factory.getItems = function(){
            return factory.items;
        }

        return factory;


        };

