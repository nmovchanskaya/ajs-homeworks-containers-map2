import Settings from '../settings.js';

test('test settings', () => {
  const sets = new Settings();
  const res = sets.settings;
  const expected = new Map();
  expected.set('result', { music: 'rock', theme: 'dark', difficulty: 'easy' });
  expect(res).toEqual(expected);
});

test('test music', () => {
  const sets = new Settings();
  sets.settings = { music: 'pop' };
  const res = sets.settings;
  const expected = new Map();
  expected.set('result', { music: 'pop', theme: 'dark', difficulty: 'easy' });
  expect(res).toEqual(expected);
});

test('test theme', () => {
  const sets = new Settings();
  sets.settings = { theme: 'light' };
  const res = sets.settings;
  const expected = new Map();
  expected.set('result', { music: 'rock', theme: 'light', difficulty: 'easy' });
  expect(res).toEqual(expected);
});

test('test difficulty', () => {
  const sets = new Settings();
  sets.settings = { difficulty: 'hard' };
  const res = sets.settings;
  const expected = new Map();
  expected.set('result', { music: 'rock', theme: 'dark', difficulty: 'hard' });
  expect(res).toEqual(expected);
});
