TrelloApp.ApplicationController = Ember.ObjectController.extend({
  altName: function() {
    return this.get('name') + ' (' + this.get('userName') +')';
  }.property('name', 'userName') 
});