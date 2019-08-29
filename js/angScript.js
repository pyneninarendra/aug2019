'use strict';
var myApp = angular.module('myApp', []);

myApp.controller("myCtrl", function($scope) {
    $scope.msg = "Welcome to Angular Controllers"
});