module.exports.inputFileread = function () {
    return {
        restrict: "A",
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            //todo : 下面是直接获取文件内容
            /*element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });*/
            //todo : 下面是获取文件队列
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0];
                    // or all selected files:
                    // scope.fileread = changeEvent.target.files;
                });
            });
        }
    }
}