require("./index.html");
require("angular");
require("angular-ui-bootstrap");
require("./node_modules/bootstrap/dist/css/bootstrap.css");
var app = angular.module('app', [
    require("angular-route"),
    "ui.bootstrap"
]);
app.config(function ($routeProvider) {
    $routeProvider
        .when(
            '/home',
            {
                template: require("./controller/iframeDemo/iframeDemo.html"),
                controller: require("./controller/iframeDemo/iframeDemo").home
            }
        )
        .when(
            '/angularModal',
            {
                template: require("./controller/angularModal/angularModal.html"),
                controller: require("./controller/angularModal/angularModal").angularModal,
                controllerAs: "$ctrl"
            }
        )
        .when(
            "/childPage",//angular中对同域网页的iframe控制
            {
                template: require("./childPage/childPage.html"),
                controller: require("./childPage/childPage").childPage
            }
        )
        .otherwise('/angularModal')
});
//注册controller
app.controller("angularModal", require("./controller/angularModal/angularModal").angularModal);
//注册directive
app.directive("frameBox", require("./directive/iframeBox/iframeBox").frameBox);
