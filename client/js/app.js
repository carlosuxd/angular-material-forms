angular
    .module('MyApp', ['ngMaterial', 'ngMessages'])
    .controller('AppCtrl', function($scope) {
    $scope.calendar = new Date();
    
    $scope.minDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth(),
    $scope.myDate.getDate()-1);

    $scope.maxDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() + 4,
    $scope.myDate.getDate());

});