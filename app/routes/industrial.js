import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('industrial');
	},
	actions: {
		saveCompany(params) {
		    var newCompany = this.store.createRecord('industrial', params);
		    newCompany.save();
		    this.transitionTo('industrial');
		}
	}
});
