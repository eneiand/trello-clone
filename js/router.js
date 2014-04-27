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
    this.render('mine', {into: 'boards', outlet: 'myBoards'});
    this.render('other', {into: 'boards', outlet: 'other'});
  }
});