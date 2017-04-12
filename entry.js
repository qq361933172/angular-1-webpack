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
            '/iframeDemo', //测试iframe
            {
                template: require("./controller/iframeDemo/iframeDemo.html"),
                controller: require("./controller/iframeDemo/iframeDemo").home
            }
        )
        .when(
            "/childPage",//angular中对同域网页的iframe控制
            {
                template: require("./controller/childPage/childPage.html"),
                controller: require("./controller/childPage/childPage").childPage
            }
        )
        .when(
            '/angularModal',//angular 弹框 模态框
            {
                template: require("./controller/angularModal/angularModal.html"),
                controller: require("./controller/angularModal/angularModal").angularModal,
                controllerAs: "$ctrl"
            }
        )
        .when(
            '/remoteValidate', //远程校验 remote validate
            {
                template: require("./controller/remoteValidate/remoteValidate.html"),
                controller: require("./controller/remoteValidate/remoteValidate").remoteValidate,
            }
        )
        .otherwise('/remoteValidate')
});
//注册controller
app.controller("angularModal", require("./controller/angularModal/angularModal").angularModal);
//注册directive
app.directive("frameBox", require("./directive/iframeBox/iframeBox").frameBox);
app.directive("pageTo", require("./directive/pageTo/pageTo").pageTo);
app.directive("remoteValidate", require("./directive/remoteValidate/remoteValidate").remoteValidate);
