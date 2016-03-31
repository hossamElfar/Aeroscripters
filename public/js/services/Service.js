/**
 * Flights Service
 */
lufthansa.factory('lufthansaServ', function ($http) {
  return {
      getAirportCodes : function() {
        return $http.get('js/dummyData/airports.json');
      },
      getReservDummy : function() {
        return $http.get('js/dummyData/reservDummy.json');
      }
      // You can add here http get to you dummyData and get the result at the mainCtrl
      // Yous should make getters and setters for all your functions here
  };
});
