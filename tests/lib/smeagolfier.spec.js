import test from 'ava'
import smeagolfier from '../../src/lib/smeagolfier'

test('Should answer a plural with "ses" in place of "s"', t => {
  t.deepEqual(smeagolfier('eggs'), 'eggses')
  t.deepEqual(smeagolfier('pockets'), 'pocketses')
})
