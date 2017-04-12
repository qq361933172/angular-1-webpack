module.exports.remoteValidate = function ($timeout, $http) {
    var toId = null;
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attr, ctrl) {
            scope.$watch(attr.ngModel, function (value) {
                if (toId) clearTimeout(toId);
                toId = setTimeout(function () {
                    $http.get("json/test.json").then(function (res) {
                        if (res.data.ok == 1) {
                            ctrl.$setValidity('remoteValidate', true);
                        } else {
                            ctrl.$setValidity('remoteValidate', false);
                        }
                    });
                }, 200);
            })
        }
    }
}