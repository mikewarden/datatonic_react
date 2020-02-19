let data = [];

fetch("http://localhost:8080/data_entries")
.then((res) => res.json())
.then((response) => {
  console.log(response);
  data.push(response);
}).catch((err) => console.log(err));

const sensitiveDataBySource = [{
  state: 'DS1',
  swiftCode: data[0],
  email: 28.6,
  bank: 5.1,
  phone: 4,
  ssn: 8,
  passport: 5,
  routing: 6,
  dob: 3,
  credit: 12
}, {
  state: 'DS2',
  swiftCode: 6.7,
  email: 28.6,
  bank: 5.1,
  phone: 4,
  ssn: 8,
  passport: 5,
  routing: 6,
  dob: 3,
  credit: 12
}, {
  state: 'DS3',
  swiftCode: 6.7,
  email: 28.6,
  bank: 5.1,
  phone: 4,
  ssn: 8,
  passport: 5,
  routing: 6,
  dob: 3,
  credit: 12
}, {
  state: 'DS4',
  swiftCode: 6.7,
  email: 28.6,
  bank: 5.1,
  phone: 4,
  ssn: 8,
  passport: 5,
  routing: 6,
  dob: 3,
  credit: 12
},
{
  state: 'DS5',
  swiftCode: 6.7,
  email: 28.6,
  bank: 5.1,
  phone: 4,
  ssn: 8,
  passport: 5,
  routing: 6,
  dob: 3,
  credit: 12
},
{
  state: 'DS6',
  swiftCode: 6.7,
  email: 28.6,
  bank: 5.1,
  phone: 4,
  ssn: 8,
  passport: 5,
  routing: 6,
  dob: 3,
  credit: 12
},
];

export default {
  getSensitiveDataBySource() {
    return sensitiveDataBySource;
  }
};
