angular.module('NoteSpot').controller('NotesIndexController', function(Note, Category, $scope){
  $scope.notes = Note.query();
  // $scope.categories = Category.query();
  $scope.search = {};
  console.log($scope.notes);
  window.s = $scope;

});
