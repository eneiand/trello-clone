/*global DS, TrelloApp */

TrelloApp = Ember.Application.create();

//TrelloApp.ApplicationAdapter = DS.FixtureAdapter.extend();

TrelloApp.Store = DS.Store.extend({
    revision: 12,
    //adapter: 'DS.RESTAdapter',
    adapter: DS.FixtureAdapter.extend({
        queryFixtures: function(fixtures, query, type) {
            console.log(query);
            console.log(type);
            return fixtures.filter(function(item) {
                for(prop in query) {
                    if( item[prop] != query[prop]) {
                        return false;
                    }
                }
                return true;
            });
        }
    })
});