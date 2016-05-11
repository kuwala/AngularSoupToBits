angular.module('NoteSpot').controller('UsersIndexController', function(User, $scope){
  $scope.users = User.query();
  console.log($scope.users);

});
