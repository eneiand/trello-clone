/*global DS, TrelloApp */

TrelloApp.Board = DS.Model.extend({
    name: DS.attr('string'),
    isMine: DS.attr('boolean'),
    hasUpdates: DS.attr('boolean'),
    isStarred: DS.attr('boolean'),
    lists: DS.hasMany('list', {async:true}),
    members: DS.hasMany('user'),
    user: DS.belongsTo('user'),
    organisation: DS.belongsTo('organisation')
});

TrelloApp.Board.FIXTURES = [
    {
        id: 1,
        name: 'Learn Ember.js',
        isMine: true,
        hasUpdates: true,
        lists: [1, 2, 3],
        user: 1,
        organisation: 1
    },
    {
        id: 2,
        name: 'Regard',
        isMine: false,
        hasUpdates: true,
        user: 1
    },
    {
        id: 3,
        name: 'Some other proj',
        isMine: false,
        hasUpdates: false,
        user: 1
    },
    {
        id: 4,
        name: 'Starred proj',
        isMine: false,
        hasUpdates: false,
        isStarred: true,
        user: 1
    }
];