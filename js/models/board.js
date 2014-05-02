/*global DS, TrelloApp */

TrelloApp.Board = DS.Model.extend({
    name: DS.attr('string'),
    isMine: DS.attr('boolean'),
    hasUpdates: DS.attr('boolean'),
    isStarred: DS.attr('boolean')
});

TrelloApp.Board.FIXTURES = [
    {
        id: 1,
        name: 'Learn Ember.js',
        isMine: true,
        hasUpdates: true
    },
    {
        id: 2,
        name: 'Regard',
        isMine: false,
        hasUpdates: true
    },
    {
        id: 3,
        name: 'Some other proj',
        isMine: false,
        hasUpdates: false
    },
    {
        id: 4,
        name: 'Starred proj',
        isMine: false,
        hasUpdates: false,
        isStarred: true
    }
];