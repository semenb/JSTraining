import users from './users.js';

const getSortedUniqueSkills = users => {
  //   return [
  //     ...new Set(
  //       users
  //         .map(({ skills }) => skills)
  //         .flat(1)
  //         .sort(),
  //     ),
  //   ];

  // without Set. With Set works too and we do not need a temporary variable.
  const arr = users.map(({ skills }) => skills).flat(1);
  return arr.filter((item, index) => arr.indexOf(item) === index).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
