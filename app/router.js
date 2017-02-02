import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('agriculture');
  this.route('communication');
  this.route('industrial');

  this.route('communicationchild', {
    path: '/communicationchild/:communication_id'
  });
  this.route('financial');
  this.route('company', {
    path: '/company/:finance_id'
  });
  this.route('olipia', {
    path: '/olipia/:industrial_id'
  });
  this.route('farming', {
    path: '/farming/:agriculture_id'
  });

});

export default Router;
