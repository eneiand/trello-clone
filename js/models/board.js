/*global DS, TrelloApp */

TrelloApp.Board = DS.Model.extend({
    name: DS.attr('string'),
    owner: DS.attr('string'),
    hasUpdates: DS.attr('boolean'),
    isStarred: DS.attr('boolean')
});

TrelloApp.Board.FIXTURES = [
    {
        id: 1,
        name: 'Learn Ember.js',
        owner: 'eneiand',
        hasUpdates: false
    },
    {
        id: 2,
        name: 'Regard',
        owner: 'eneiand',
        hasUpdates: true
    }
];