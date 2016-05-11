angular.module('NoteSpot').factory('Note', function($resource) {
  return $resource('/notes/:id',{id: "@id"},{
    update: {
      method: "PUT"
    }
  });

});
