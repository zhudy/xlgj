import Dog from './dog';

test('Dog.bark', () => {
  const testDog = new Dog('Test');
  expect(testDog.bark()).toBe('Wha Wa, I am Test');
});
