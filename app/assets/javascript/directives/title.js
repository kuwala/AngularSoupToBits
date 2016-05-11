angular.module("NoteSpot").directive('title', function($timeout){
  return function(scope, element, attrs){
    $timeout(function(){
      $(element).tooltip();
    });

    // prevent memory leaks when angular
    // changes views.
    scope.$on('$destroy', function() {
      $(element).tooltip('destroy');
    });
  };
});
