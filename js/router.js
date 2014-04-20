/*global DS, TrelloApp */

TrelloApp.Router.map(function() {
  this.resource('boards', { path: '/' });
});

//class with a model function that returns all existing todos
TrelloApp.BoardsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('board');
  }
});