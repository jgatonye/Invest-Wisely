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
  this.route('Financial');
});

export default Router;
