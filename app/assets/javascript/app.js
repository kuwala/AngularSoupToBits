angular.module('NoteSpot', ['ngRoute', 'ngResource', 'ngGravatar']).config(function(GravatarProvider){
  GravatarProvider.setSize(100);
});
