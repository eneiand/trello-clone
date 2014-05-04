TrelloApp.Card = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    list: DS.belongsTo('list'),
    members: DS.hasMany('user')
});

TrelloApp.Card.FIXTURES = [{
        id: 1,
        name: 'Collect underpants',
        list: 1
    },
    {
        id: 2,
        name: '?',
        list: 1
    },
    {
        id: 3,
        name: 'Profit',
        list: 1
    }
];