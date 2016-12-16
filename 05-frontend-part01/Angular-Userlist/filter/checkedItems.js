angular
.module('pwp.filter.checkedItems',[])
.filter('checkedItems', checkedItems);


function checkedItems(){
    return function(items){
        var resultArray=[];

        angular.forEach(items, function(item){

            if(item.done == false) {
                resultArray.push(item);
            }
        });
        return resultArray;

    }


}