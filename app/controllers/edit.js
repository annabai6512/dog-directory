import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EditController extends Controller {
  @service store;

  @action
  delete() {
    console.log('delete');
  }
}
