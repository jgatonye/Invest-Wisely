import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return  this.store.findAll('agriculture');
	},
	actions: {
		saveCompany(params) {
		    var newCompany = this.store.createRecord('agriculture', params);
		    newCompany.save();
		    this.transitionTo('agriculture');
		}
	}
});
