TrelloApp.Organisation = TrelloApp.User.extend({
    members: DS.hasMany('user'),
    isPrivate: DS.attr('boolean')
});

TrelloApp.Organisation.FIXTURES = [{
        id: 1,
        name: 'NeilCorp',
        userName: 'neilcorp',
        avatar: 'https://trello-logos.s3.amazonaws.com/b6e0e0bfe2e2053704cc298d8c9254ad/30.png',
        boards: [1, 2, 3, 4],
        members: [1]
    }
];