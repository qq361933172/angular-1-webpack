module.exports.angularModal = function ($uibModal, $log, $document) {
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];
    $ctrl.animationsEnabled = true;
    $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            //这个controller可以单独写在一个js文件内
            controller: function ($uibModalInstance, items) {
                var $modalCtrl = this;
                $modalCtrl.items = items;
                $modalCtrl.selected = {
                    item: $modalCtrl.items[0]
                };
                $modalCtrl.ok = function () {
                    $uibModalInstance.close($modalCtrl.selected.item);
                };
                $modalCtrl.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            },
            controllerAs: '$modalCtrl',
            size: size,
            appendTo: parentElem,
            resolve: {
                //items是父作用域传递给子作用域的变量
                items: function () {
                    return $ctrl.items;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}