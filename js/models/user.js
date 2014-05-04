/*global DS, TrelloApp */

TrelloApp.User = DS.Model.extend({
    name: DS.attr('string'),
    userName: DS.attr('string'),
    avatar: DS.attr('string'),
    boards: DS.hasMany('board')
});

TrelloApp.User.FIXTURES = [{
        id: 1,
        name: 'Neil Anderson',
        userName: 'neilanderson',
        avatar: 'https://trello-avatars.s3.amazonaws.com/1378ca16aeaf89666a5666e6dc3f654c/30.png',
        boards: [1, 2, 3, 4]
    }
];