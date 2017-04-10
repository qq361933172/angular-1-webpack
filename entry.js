require("./index.html");
require("angular");
var app = angular.module('app', [
    require("angular-route"),
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
            "/childPage",//angular中对同域网页的iframe控制
            {
                template: require("./childPage/childPage.html"),
                controller: require("./childPage/childPage").childPage
            }
        )
        .otherwise('/iframeDemo')
});
//注册directive
app.directive("frameBox", require("./directive/iframeBox/iframeBox").frameBox);
