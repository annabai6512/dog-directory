import { module, test } from 'qunit';
import { setupTest } from 'dog-directory/tests/helpers';

module('Unit | Route | add', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:add');
    assert.ok(route);
  });
});
