import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('communication');
  },

  actions: {
    // have the route handler add the new company to the store
    saveCommunication3(params) {
      var newCompany = this.store.createRecord('communication', params);
      newCompany.save();
      this.transitionTo('communication');
    },
  }
});
