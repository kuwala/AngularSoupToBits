angular.module('NoteSpot').factory('User', function($resource) {
  return $resource('/users/:id',{},{});
});
