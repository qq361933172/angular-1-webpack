module.exports.testLoadingShow = function ($scope, $timeout) {
    $scope.show = 1;
    $timeout(function () {
        $scope.show = -1;
    }, 3000);
}