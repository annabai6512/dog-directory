import { module, test } from 'qunit';

import { setupTest } from 'dog-directory/tests/helpers';

module('Unit | Model | dog', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('dog', {});
    assert.ok(model);
  });
});
