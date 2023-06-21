import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EditController extends Controller {
  @service store;
  @service("dog-database") dogDatabase;
  @tracked showDeleted = false;
  @tracked showSaved = false;

  @action
  delete(id) {
    console.log(id);
    let dog = this.store.peekRecord('dog', id);
    this.dogDatabase.deleteDog(dog);
    console.log(this.dogDatabase.allDogs);
    this.showDeleted = true;
  }

  @action
  back() {
    this.showDeleted = false;
    this.showSaved = false;
  }

  @action
  update() {
    this.showSaved = true;
  }
}
