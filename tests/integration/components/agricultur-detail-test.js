import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('agricultur-detail', 'Integration | Component | agricultur detail', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{agricultur-detail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#agricultur-detail}}
      template block text
    {{/agricultur-detail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
