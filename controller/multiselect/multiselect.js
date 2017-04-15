module.exports.multiselect = function ($scope) {
    
    $scope.example14model = [];
    $scope.example14data = [{id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Lisa"}, {
        id: 4,
        label: "Nicole"
    }, {id: 5, label: "Danny"}, {id: 6, label: "Dan"}, {id: 7, label: "Dean"}, {id: 8, label: "Adam"}, {
        id: 9,
        label: "Uri"
    }, {id: 10, label: "Phil"}];
    $scope.example14settings = {scrollableHeight: '100px', scrollable: true};
    $scope.onItemSelect=function () {
        console.log(this);
    }
}