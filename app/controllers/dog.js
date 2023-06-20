import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EditController extends Controller {
  @service store;

  @action
  delete() {
    // let dog = this.store.peekRecord('dog','saul');
    // console.log('to delete ' + dog);
    // dog.deleteRecord();
    // console.log('is deleted ' + dog.isDeleted);
    // dog.save();
    this.store.findRecord('dog', 'saul').then(function (dog) {
      this.store.unloadRecord(dog);
    });
  }
}
