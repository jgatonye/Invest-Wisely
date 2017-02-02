import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('finance',  params.finance_id);
  },
  saveReview3(params) {
  	console.log(params);
        // var newReview = this.store.createRecord('review', params);
        // var finance = params.finance;
        // finance.get('reviews').addObject(newReview);
        // newReview.save().then(function() {
        //   return finance.save();
        // });
        // this.transitionTo('financial', finance);
      }
});