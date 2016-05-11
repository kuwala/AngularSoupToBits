angular.module('NoteSpot').controller('NotesCreateController', function(Note, $scope, $location){
  $scope.note = new Note();
  $scope.isSubmitting = false;
  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$save().then(function(){
        $scope.isSubmitting = false;
        $location.path('/notes');
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  };
});
