/*global DS, TrelloApp */

TrelloApp.Board = DS.Model.extend({
    name: DS.attr('string'),
    owner: DS.attr('string'),
    hasUpdates: DS.attr('boolean'),
    isStarred: DS.attr('boolean')
});