import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddController extends Controller {
  @service store;
  @service("dog-database") dogDatabase;
  @tracked submitted = false;

  @action
  save() {
    event.preventDefault();
    console.log(this.submitted);
    if (!this.submitted) {
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
      this.name = null;
      this.breed = null;
      this.owner = null;
      this.size = null;
      this.description = null;
      this.meals = null;
      this.activities = null;

      this.submitted = true;
      console.log(this.submitted);
    }
    
    // dog.save().then(() => {
    //   console.log('save successful');
    // });
    //   function () {
    //     console.log('save failed');
    //   }
    // );
  }

  @action
  back() {
    this.submitted = false;
  }
}
