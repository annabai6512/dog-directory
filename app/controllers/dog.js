import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EditController extends Controller {
  @service store;
  @service("dog-database") dogDatabase;

  @action
  delete(id) {
    console.log(id);
    let dog = this.store.peekRecord('dog', id);
    this.dogDatabase.deleteDog(dog);
    console.log(this.dogDatabase.allDogs);

  }

  // @action
  // update(mod) {
  //   // console.log("updating" + mod);
  //   // console.log(this.store.peekRecord('dog', mod.id));
  //   // .then(function(dog) {
  //   //   dog.name = mod.name;
  //   //   dog.breed = mod.breed;
  //   //   dog.owner = mod.owner;
  //   //   dog.size = mod.size;
  //   //   dog.description = mod.description;
  //   //   dog.meals = {
  //   //     breakfast: mod.meals.breakfast,
  //   //     dinner: mod.meals.dinner,
  //   //   }
  //   //   dog.activities = mod.activities;
  //   // });
  // }
}
