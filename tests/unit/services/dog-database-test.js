import { module, test } from 'qunit';
import { setupTest } from 'dog-directory/tests/helpers';

module('Unit | Service | dogDatabase', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:dog-database');
    assert.ok(service);
  });
});
