/**
 * Flights Service
 */
lufthansa.factory('lufthansaServ', function ($http) {
    return {
        getAirportCodes : function() {
            return $http.get('/api/data/codes');
        },
        setSelectedOriginAirport : function(value) {
            this.selectedOriginAirport = value;
        },
        getSelectedOriginAirport : function() {
            return this.selectedOriginAirport;
        },
        setSelectedDestinationAirport : function(value) {
            this.selectedDestinationAirport = value;
        },
        getSelectedDestinationAirport : function() {
            return this.selectedDestinationAirport;
        },
        getOffers : function(){
            return $http.get('/api/data/offers');
        },
        getNews : function(){
            return $http.get('/api/data/news');
        }
    };
});