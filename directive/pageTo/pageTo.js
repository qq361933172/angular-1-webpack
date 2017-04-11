module.exports.pageTo = function ($location) {
    return {
        restrict: "AE",
        link: function (scope, element, attrs, pctrl) {
            element.on('click', function () {
                $location.path(attrs.pageTo);
                scope.$apply();//todo : 这个必须加上哦!
            });
        }
    }
}