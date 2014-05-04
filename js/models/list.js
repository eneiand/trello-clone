TrelloApp.List = DS.Model.extend({
    name: DS.attr('string'),
    cards: DS.hasMany('card', {async:true}),
    board: DS.belongsTo('board')
});

TrelloApp.List.FIXTURES = [{
        id: 1,
        name: 'To Do',
        board: 1,
        cards: [1, 2, 3]
    },
    {
        id: 2,
        name: 'Doing',
        board: 1
    },
    {
        id: 3,
        name: 'Done',
        board: 1
    }
];