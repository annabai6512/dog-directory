import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service("dog-database") dogDatabase;

  beforeModel() {
    if (this.dogDatabase.allDogs.length == 0) {
        return this.store.findAll('dog').then((res) => {
            this.dogDatabase.allDogs.pushObjects(res);
              return res;
          });
    }
  }

  async model() {
    console.log(this.dogDatabase.allDogs);
    return this.dogDatabase.allDogs;
  };
}
