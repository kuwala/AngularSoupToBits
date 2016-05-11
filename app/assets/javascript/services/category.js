angular.module('NoteSpot').factory('Category', function($resource) {
  return $resource('/categories/:id',{},{});
});
