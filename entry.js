require("./index.html");
require("angular");
require("angular-ui-bootstrap");
require("./node_modules/bootstrap/dist/css/bootstrap.css");
require("./node_modules/angularjs-dropdown-multiselect/src/angularjs-dropdown-multiselect.js")
var app = angular.module('app', [
    require("angular-route"),
    'angularjs-dropdown-multiselect',
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
        .when(
            '/formValidate', //远程校验 remote validate
            {
                template: require("./controller/formValidate/formValidate.html"),
                controller: require("./controller/formValidate/formValidate").formValidate,
            }
        )
        .when(
            '/multiselect', //远程校验 remote validate
            {
                template: require("./controller/multiselect/multiselect.html"),
                controller: require("./controller/multiselect/multiselect").multiselect,
            }
        )
        .when(
            '/useLocationSearch', //远程校验 remote validate
            {
                template: require("./controller/useLocationSearch/useLocationSearch.html"),
                controller: require("./controller/useLocationSearch/useLocationSearch").useLocationSearch,
            }
        )
        .when(
            '/fileUploadDemo', //远程校验 remote validate
            {
                template: require("./controller/fileUploadDemo/fileUploadDemo.html"),
                controller: require("./controller/fileUploadDemo/fileUploadDemo").fileUploadDemo,
            }
        )
        .otherwise('/fileUploadDemo')
});
//注册controller
app.controller("angularModal", require("./controller/angularModal/angularModal").angularModal);
app.controller("formValidate", require("./controller/formValidate/formValidate").formValidate);
app.controller("fileUploadDemo", require("./controller/fileUploadDemo/fileUploadDemo").fileUploadDemo);
//注册directive
app.directive("frameBox", require("./directive/iframeBox/iframeBox").frameBox);
app.directive("pageTo", require("./directive/pageTo/pageTo").pageTo);
app.directive("remoteValidate", require("./directive/remoteValidate/remoteValidate").remoteValidate);
