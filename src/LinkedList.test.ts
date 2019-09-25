import LinkedList from './LinkedList';

test('Linked list creates empty list', () => {
  const list = new LinkedList();
  expect([...list].length).toEqual(0);
  expect(list.isEmpty()).toBe(true);
});

test('Linked list adds head node', () => {
  const list = new LinkedList();
  list.add(1); 
  expect(list.head.value).toEqual(1);
  expect([...list].length).toEqual(1);
});

test('Linked list adds node', () => {
  const list = new LinkedList();
  list.add(1); 
  list.add(2); 
  expect([...list].length).toEqual(2);
  expect(list.has(2)).toBe(true);
});

test('Linked list deletes the only node', () => {
  const list = new LinkedList();
  list.add(1); 
  list.delete(1);
  expect(list.has(1)).toBe(false);
});

test('Linked list deletes head node', () => {
  const list = new LinkedList();
  list.add(1); 
  list.add(2); 
  list.add(3); 
  list.delete(1);
  expect(list.has(1)).toBe(false);
});

test('Linked list deletes middle node', () => {
  const list = new LinkedList();
  list.add(1); 
  list.add(2); 
  list.add(3);  
  list.add(4);
  list.delete(3);
  expect(list.has(3)).toBe(false);
});

test('Linked list finds existing node', () => {
  const list = new LinkedList();
  list.add(1);
  const node = list.find(1);
  expect(node && node.value === 1).toBe(true);
});

test('Linked list doesn\'t find missing node', () => {
  const list = new LinkedList();
  list.add(1);
  expect(list.find(2)).toBeNull;
});

test('Linked list clears values', () => {
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.clear();
  expect([...list].length).toEqual(0);
  expect(list.isEmpty()).toBe(true);
});

test('Linked list removes duplicates', () => {
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(1);
  list.add(true);
  list.add('1');
  list.unique();
  expect(list.has(1)).toBe(true);
  expect(list.has(2)).toBe(true);
  expect(list.has('1')).toBe(true);
  expect(list.has(true)).toBe(true);
  expect([...list].length).toEqual(4);
});
