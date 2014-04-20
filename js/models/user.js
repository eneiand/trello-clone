/*global DS, TrelloApp */

TrelloApp.User = DS.Model.extend({
    realName: DS.attr('string'),
    username: DS.attr('string')
});