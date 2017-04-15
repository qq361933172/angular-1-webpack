module.exports.useLocationSearch = function ($scope, $location) {
    
    $scope.correctPageTo = function () {
        $location.path("/remoteValidate").search({
            a: 1,
            b: 2
        })
    }
}