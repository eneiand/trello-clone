TrelloApp.Card = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    list: DS.belongsTo('list'),
    members: DS.hasMany('user')
});