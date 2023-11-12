import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

const players = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'молоточник', health: 70 },
];
export const playersSort = players.sort((a, b) => {
  if (a.health > b.health) {
    return -1;
  }
  if (a.health < b.health) {
    return 1;
  }
  return 0;
});
