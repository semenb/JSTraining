import users from './users.js';

const getInactiveUsers = users => {
  return users.filter(item => item.isActive === false);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
