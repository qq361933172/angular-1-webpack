module.exports.inputFileUpLoad = function ($scope,$http) {
    //console.log($scope.myfile);//这里返回undefined
    /*$scope.$watch("myfile", function (val) {
        console.log(val);//这里能监控到input的变化
    });*/
    $scope.fnUpload = function () {
        console.log($scope.myfile);

        $http({
            url: "uploadUrl",
            method: 'POST',
            headers: {
                'Content-Type': undefined
            },
            transformRequest: function () {
                var formData = new FormData();
                formData.append('file', $scope.myfile);
                return formData;
            }
        }).then(function (resUrl) {
            console.log(resUrl);//获取上传后的路径
        })
    }
}