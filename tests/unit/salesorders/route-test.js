import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | salesorders', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:salesorders');
    assert.ok(route);
  });
});
