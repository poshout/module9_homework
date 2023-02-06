const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;
const result = []
list.forEach (list => {
  result.push ({
    name: list.name,
    age: Number(list.age),
    prof: list.prof,
  })
})

const list2 = {
  result: result
};

console.log (list2);