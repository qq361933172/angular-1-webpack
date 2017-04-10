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
                template: require("./home/home.html"),
                controller: require("./home/home").home
            }
        )
        .when(
            "/childPage",//angular中对同域网页的iframe控制
            {
                template: require("./childPage/childPage.html"),
                controller: require("./childPage/childPage").childPage
            }
        )
        .otherwise('/home')
});
//注册directive
app.directive("frameBox", require("./directive/iframeBox/iframeBox").frameBox);
