/*global DS, TrelloApp */

'use strict';

TrelloApp.Router.map(function () {
  this.resource('boards', { path: '/' }, function(){
    this.route('mine');
    this.route('other');
    this.route('starred');
    this.resource('board', { path: '/:board_id'}, function(){
        this.resource('card', {path: '/:card_id'});
    });
  });
  this.resource('organisations', function(){
    this.resource('organisation', {path: '/org_id'});
  });
});


TrelloApp.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user').then(function(result){
      return result.get('firstObject');
    });
  }
});


TrelloApp.BoardsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('board');
  },
  renderTemplate: function () {
    this.render();
    this.render('boards/mine', {into: 'boards/index', outlet: 'myBoards'});
    this.render('boards/other', {into: 'boards/index', outlet: 'other'});
    this.render('boards/starred', {into: 'boards/index', outlet: 'starred'});
  }
});

TrelloApp.BoardsStarredRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('board', {isStarred : true});
  }
});

TrelloApp.BoardsMineRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('board', {isMine : true});
  }
});

TrelloApp.BoardsOtherRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('board', {isMine : false});
  }
});