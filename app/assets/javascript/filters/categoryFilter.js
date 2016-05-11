angular.module("NoteSpot").filter('categoryFilter', function() {
  return function(collection, category) {
    var newCollection = [];

    if(category && category.id) {
      for(var i=0, l=collection.length; i < l; i++) {
        if(collection[i].categoryId === category.id) {
          newCollection.push(collection[i]);
        };
      };
    } else {
      newCollection = collection;
    }
    return newCollection;
  };
});
