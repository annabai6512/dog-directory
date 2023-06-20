import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class DogDatabaseService extends Service {
    @tracked allDogs = A([]);
    @service store;

    addNewDog(dog) {
        this.allDogs.pushObject(dog);
    }

    deleteDog(dog) {
        this.allDogs.removeObject(dog);
    }
}
