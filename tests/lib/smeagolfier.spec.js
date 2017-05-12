import test from 'ava'
import smeagolfier from '../../src/lib/smeagolfier'

test('Should answer a plural with "ses" in place of "s"', t => {
  t.deepEquals(smeagolfier('eggs'), 'eggses')
})
