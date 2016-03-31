/**
 * Main Controller
 */
lufthansa.controller('mainCtrl', function($scope,lufthansaServ,$location) {

  function AirportCodes() {
    lufthansaServ.getAirportCodes().success(function(airports) {
         $scope.Airports = airports;
     });
  };
  $scope.directToReservation = function() {
    $location.url('/reservation');
  };
  $scope.directToOutgoingFlights = function() {
    $location.url('/outgoingFlights');
  };
  //Add the direction to your own partial function.
  //Just call this method to redirect to any other partial on your html
  //Add all your functions here
  //make Setters here for your functions and call them to lufthansaServ to
  //be accessable later by any scope and by any ctrl
  AirportCodes();
});
