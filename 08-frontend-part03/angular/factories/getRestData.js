/**
 * Created by Juliane on 15.12.16.
 */


angular
    .module('pwp.factory.userFactory', [])
    .factory("userFactory", UserFactory);

    UserFactory.$inject= ['$http'];

function UserFactory($http) {

    var factory = {};

    factory.getUsers = function(){
        return   $http.get('https://raw.githubusercontent.com/mimuc/pwp-ws-16-17/master/06-frontend-part02/polymer/users.json')
    }


    return factory;
};
