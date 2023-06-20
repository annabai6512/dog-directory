import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';


export default class AddController extends Controller {
    @service store;

    @action
    save() {
        event.preventDefault();
        console.log(this.name, this.breed, this.owner, this.size, this.description, this.meals, this.activities);
        // var user = this.store.createRecord('dog', {
        //     name: this.name,
        //     breed: this.breed,
        //     owner: this.owner,
        //     size: this.size,
        //     description: this.description,
        //     meals: this.meals,
        //     activities: this.activities
        //     });
        // user.save().then( () => {
        //     console.log('save successful');
        // }, function() {
        //     console.log('save failed');
        // });
    }
}
