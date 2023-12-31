import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DogRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('dog', params.dog_id);
  }
}
