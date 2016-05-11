angular.module("NoteSpot").directive('daPageNav', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: '/assets/templates/directives/daPageNav.html',
    controller: function($scope, $location) {
      $scope.isPage = function(name){
        //   \/notes($|\/)/
        //   \/users($|\/)/
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
