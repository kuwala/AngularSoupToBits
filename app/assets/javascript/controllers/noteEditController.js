angular.module('NoteSpot').controller('NotesEditController', function(Note, Category, User, $scope, $routeParams, $location){
  $scope.note = Note.get({id: $routeParams.id});
  $scope.isSubmitting = false;
  // console.log($scope.note); // for debug
  $scope.categories = Category.query();
  // console.log($scope.categories); // for debug
  $scope.users = User.query();
  console.log($scope.users); // for debug

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$update().finally(
      function(){
        $scope.isSubmitting = false;
        $location.path('/notes/'+ note.id);
      });
  };

});
