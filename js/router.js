/*global DS, TrelloApp */

'use strict';

TrelloApp.Router.map(function () {
  this.resource('boards', { path: '/' });
});

TrelloApp.BoardsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('board');
  },
  renderTemplate: function () {
    this.render();
    this.render('boards/mine', {into: 'boards', outlet: 'myBoards'});
    this.render('boards/other', {into: 'boards', outlet: 'other'});
  }
});

