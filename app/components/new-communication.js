import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // display the form if the button is clicked
    companyFormShow() {
      this.set('addNewCompany', true);
    },
    // collecting all the data entered from the forms
    saveCommunication1() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        content: this.get('content'),
      };
      // hide the form if the save button is clicked
      this.set('addNewCompany', false);
      this.sendAction('saveCommunication2', params);
    }

  }
});
