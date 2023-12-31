import EmberRouter from '@ember/routing/router';
import config from 'dog-directory/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('add');
  this.route('dog', { path: '/dog/:dog_id' });
});
