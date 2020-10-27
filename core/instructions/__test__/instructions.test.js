const { instructions } = require('../instructions');

test('tests if have an instruction with the same ID', () => {
  const result = Object.values(instructions)
    .filter((v, i, arr) => arr.indexOf(v) !== i);
  expect(result.length > 0).toBe(false);
});
