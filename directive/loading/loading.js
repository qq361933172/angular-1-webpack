module.exports.loading = function ($timeout) {
    return {
        scope: {
            show: "="
        },
        restrict: "E",
        link: function (scope, element, attrs, ctrl) {
            function create(element) {
                var div = document.createElement("div");
                div.innerHTML = "loading...";
                div.id = "loading";
                angular.element(div).addClass("loading");
                element.parent().append(div);
                return div;
            }

            function remove() {
                if (!!document.querySelector("#loading")) {
                    angular.element(document.querySelector("#loading")).remove();
                }
            }

            function hide(e) {
                e.addClass("hide");
            }

            function show(e) {
                e.addClass("show");
            }

            scope.$watch("show", function (val) {
                if (val > 0) {
                    remove();
                    var div = create(element);
                    $timeout(function () {
                        show(angular.element(div));
                    })
                } else {
                    if (!!document.querySelector("#loading")) {
                        hide(angular.element(document.querySelector("#loading")));
                        $timeout(function () {
                            remove()
                        }, 2000);
                    }
                }
            })
        }
    }
}