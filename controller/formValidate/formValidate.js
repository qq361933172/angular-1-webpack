module.exports.formValidate = function ($scope) {
    $scope.submitted = false;
    $scope.savesth = function () {
        console.log($scope.myform.$valid);
        console.log(this.myform.$valid);
        $scope.submitted = true;
    }
}