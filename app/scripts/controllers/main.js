'use strict';

angular.module('foosTimeApp', ['timer'])
  .controller('MainCtrl', function ($scope) {
    $scope.technologies = [
      'HTML5 Boilerplate',
      'AngularJS'
    ];

  });
