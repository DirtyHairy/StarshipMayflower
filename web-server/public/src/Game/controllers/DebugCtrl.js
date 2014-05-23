define(['../module', 'angle'], function (module, Angle) {
    'use strict';

    module.controller('DebugCtrl', ['$scope', '$location', 'Pomelo',
        function ($scope, $location, Pomelo) {
            Pomelo.on('ShipUpdate', function(ship) {
                var angle = new Angle(ship);
                $scope.azimuth = angle.getAzimuth();
                $scope.polar = angle.getPolar();
                $scope.$apply();
            });
        }
    ]);

});
