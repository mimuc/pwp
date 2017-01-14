
angular
    .module('pwp.filter.checkedItems', [])
    .filter('checkedItems', checkedItems);

function checkedItems(){
    return function (items, showComplete){
        var resultArray =[];
        angular.forEach(items, function(item){

            if(item.done == false || showComplete == true) {
                resultArray.push(item);
            }
        });
        return resultArray;

    }
}
