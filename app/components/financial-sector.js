import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        newCompanyForm() {
            this.set('newCompanyForm', true);
        },
        saveCompany() {
            var params = {
                name: this.get('name'),
                content: this.get('content'),
                image: this.get('image')
            };
            this.set('newCompanyForm', false);
            this.sendAction('saveCompany', params);
        }
    }
});
