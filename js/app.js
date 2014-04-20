TrelloApp = Ember.Application.create();

TrelloApp.Router.map(function() {
  // put your routes here
});

TrelloApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
