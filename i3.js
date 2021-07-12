function sortArrayOfObjects(arr, rules) {
  if (!arr.length) return arr;
  const defaultComparator = (a, b) => a - b,
        rulesCount = rules.length;
  return arr.sort((a, b) => {
    if ((typeof a !== 'object') || (typeof b !== 'object')) return 0;
    return rules.reduce((sum, { key, comparator = defaultComparator }, i) => {
      const weight = 2 ** (rulesCount - i);
      return sum + Math.sign(comparator(a[key], b[key], a, b)) * weight;
    }, 0);
  });
}


//
const arr = [
  { name: "John", age: 24, dept: 'dev' },
  { name: "John", age: 31, dept: 'dev' },
  { name: "John", age: 22, dept: 'qa' },
  { name: "Adam", age: 24, dept: 'qa' },
  { name: "Adam", age: 27, dept: 'dev' },
  { name: "Rose", age: 19, dept: 'sales' },
];


//*
  { dept: "sales", name: "Rose", age: 19 },
  { dept: "qa",    name: "Adam", age: 24 },
  { dept: "qa",    name: "John", age: 22 },
  { dept: "dev",   name: "Adam", age: 27 },
  { dept: "dev",   name: "John", age: 24 },
  { dept: "dev",   name: "John", age: 31 },
] */

/* Тест */
print(sortArrayOfObjects(arr, [
  { key: 'dept', comparator: (b, a) => a.localeCompare(b) },
  { key: 'name', comparator: (a, b) => a.localeCompare(b) },
  { key: 'age' },   // компаратор по-умолчанию (предполагает числовые значения, сортировка по возрастанию)
]));


/* Вспомогательная функция вывода */
function print(arr) {
  console.log(`[\n  ${arr.map(
    v => JSON.stringify(v).replace(/"/g, '\'').replace(/[:,]/g, '$& ')
  ).join(',\n  ')},\n]`);
}

