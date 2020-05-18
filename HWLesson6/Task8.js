import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(item => item.friends.some(val => val === friendName))
    .map(({ name }) => name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
