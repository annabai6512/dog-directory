import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DogListComponent extends Component {
  @tracked query = '';
}