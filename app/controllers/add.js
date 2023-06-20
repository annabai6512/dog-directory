import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddController extends Controller {
  @service store;
  @service("dog-database") dogDatabase;

  @action
  save() {
    event.preventDefault();
    console.log(this.meals);
    let activities = this.activities ? [...this.activities] : [];
    let dog = this.store.createRecord('dog', {
        name: this.name,
        breed: this.breed,
        owner: this.owner,
        size: this.size,
        description: this.description,
        meals: {
          breakfast: this.breakfast,
          dinner: this.dinner,
        },
        activities: activities,
    });
    
    this.dogDatabase.addNewDog(dog);
    console.log(this.dogDatabase.allDogs);
    // dog.save().then(() => {
    //   console.log('save successful');
    // });
    //   function () {
    //     console.log('save failed');
    //   }
    // );
  }
}
