module.exports.uploadInModal = function ($document, $scope, $uibModal) {
    $scope.openMoal = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            //这个controller可以单独写在一个js文件内
            controller: function ($scope, $uibModalInstance, FileUploader) {
                $scope.ok = function () {
                };
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
                var uploader = $scope.uploader = new FileUploader({
                    url: 'upload.php'
                });
                // FILTERS
                // a sync filter
                uploader.filters.push({
                    name: 'syncFilter',
                    fn: function (item /*{File|FileLikeObject}*/, options) {
                        console.log('syncFilter');
                        return this.queue.length < 10;
                    }
                });
                // an async filter
                uploader.filters.push({
                    name: 'asyncFilter',
                    fn: function (item /*{File|FileLikeObject}*/, options, deferred) {
                        console.log('asyncFilter');
                        setTimeout(deferred.resolve, 1e3);
                    }
                });
                // CALLBACKS
                //添加文件失败回调
                uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
                    //console.info('onWhenAddingFileFailed', item, filter, options);
                };
                //添加文件成功回调
                uploader.onAfterAddingFile = function (fileItem) {
                    console.info('onAfterAddingFile', fileItem);
                };
                //添加所有文件回调
                uploader.onAfterAddingAll = function (addedFileItems) {
                    //console.info('onAfterAddingAll', addedFileItems);
                };
                uploader.onBeforeUploadItem = function (item) {
                    //console.info('onBeforeUploadItem', item);
                };
                uploader.onProgressItem = function (fileItem, progress) {
                    //console.info('onProgressItem', fileItem, progress);
                };
                uploader.onProgressAll = function (progress) {
                    // console.info('onProgressAll', progress);
                };
                uploader.onSuccessItem = function (fileItem, response, status, headers) {
                    //console.info('onSuccessItem', fileItem, response, status, headers);
                };
                uploader.onErrorItem = function (fileItem, response, status, headers) {
                    //console.info('onErrorItem', fileItem, response, status, headers);
                };
                uploader.onCancelItem = function (fileItem, response, status, headers) {
                    //console.info('onCancelItem', fileItem, response, status, headers);
                };
                uploader.onCompleteItem = function (fileItem, response, status, headers) {
                    //console.info('onCompleteItem', fileItem, response, status, headers);
                };
                uploader.onCompleteAll = function () {
                    //console.info('onCompleteAll');
                };
            },
            controllerAs: '$modalCtrl',
            size: 'sm',
            appendTo: parentElem,
            resolve: {}
        });
        modalInstance.result.then(function (selectedItem) {
        }, function () {
        });
    }
}