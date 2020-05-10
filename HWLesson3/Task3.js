const findBestEmployee = function(employees) {
  const entries = Object.entries(employees);
  let max = 0;
  let bestOfTheBest = 'no one';

  for (const entry of entries) {
    if (entry[1] > max) {
      max = entry[1];
      bestOfTheBest = entry[0];
    }
  }

  return bestOfTheBest;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
