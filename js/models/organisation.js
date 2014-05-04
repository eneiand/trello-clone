TrelloApp.Organisation = TrelloApp.User.extend({
    members: DS.hasMany('user')
});