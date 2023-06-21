import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service("dog-database") dogDatabase;

  beforeModel() {
    if (this.dogDatabase.allDogs.length == 0) {
        return this.store.findAll('dog').then((res) => {
            this.dogDatabase.allDogs.pushObjects(res);
            this.dogDatabase.idNum = this.dogDatabase.allDogs.length + 1;
            return res;
          });
    }
  }

}
