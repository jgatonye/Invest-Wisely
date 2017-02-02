import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	  return Ember.RSVP.hash({
	    finances: this.store.findAll('finance'),
	    reviews: this.store.findAll('review')
	  });
	},
	actions: {
		saveCompany(params) {
		    var newCompany = this.store.createRecord('finance', params);
		    newCompany.save();
		    this.transitionTo('financial');
		}
	}
});
