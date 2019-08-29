'use strict';
var myApp = angular.module('myApp', []);

myApp.controller("myCtrl", function($scope) {
    $scope.fullName = '';
    $scope.firstName = 'Narendra';
    $scope.getFullName = function() {
        if ($scope.firstName && $scope.lastName) {
            $scope.fullName = $scope.firstName + ' ' + $scope.lastName;
        }
    }
});