const countTotalSalary = function(employees) {
  let salary = 0;
  const values = Object.values(employees);
  for (const value of values) {
    salary += value;
  }
  return salary;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
