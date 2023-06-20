import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddController extends Controller {
  @service store;
  @service("dog-database") dogDatabase;

  @action
  save() {
    event.preventDefault();
    let activities = this.activities ? [...this.activities] : [];
    let dog = this.store.createRecord('dog', {
        id: this.dogDatabase.idNum,
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
    this.dogDatabase.idNum += 1;
    console.log(this.dogDatabase.allDogs);
    console.log("new id: " + this.dogDatabase.idNum);
    // dog.save().then(() => {
    //   console.log('save successful');
    // });
    //   function () {
    //     console.log('save failed');
    //   }
    // );
  }
}
