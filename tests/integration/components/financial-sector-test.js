import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('financial-sector', 'Integration | Component | financial sector', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{financial-sector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#financial-sector}}
      template block text
    {{/financial-sector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
