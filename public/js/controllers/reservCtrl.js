
lufthansa.controller('reservCtrl', function($scope, lufthansaServ) {
  lufthansaServ.getReservDummy().success(function(dummy) {
       $scope.dummy = dummy;
   });
});
