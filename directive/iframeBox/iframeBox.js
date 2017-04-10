module.exports.frameBox = function () {
    return {
        restrict: "AE",
        template: require("./iframeBox.html"),
        controller: function ($scope) {
        },
        link: function (scope, element, attrs, pctrl) {
            element.find("iframe")[0].onload = function (e) {
                var frame = e.target.contentDocument || e.target.contentWindow.document;
                var doc = angular.element(frame);
                var height = doc.find('html')[0].offsetHeight;
                doc.find('div').css({
                    background: "gray"
                });
                angular.element(e.target).css({
                    height: height + 'px'
                })
            }
        }
    }
}