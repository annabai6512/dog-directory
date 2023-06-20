import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EditController extends Controller {
  @service store;
  @service("dog-database") dogDatabase;

  @action
  delete(id) {
    console.log(id);
    let dog = this.store.peekRecord('dog', id.toLowerCase());
    this.dogDatabase.deleteDog(dog);
    console.log(this.dogDatabase.allDogs);

  }
}
