const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

// MAP
//1. Get an array of all names
const map1 = characters.map((character) => {
  return character.name;
});
console.log(map1);

//2.  Get an array of all heights
const map1b = characters.map((character) => {
   return character.height;
   });
   console.log(map1b)

//3. Get an array of all first names
const map1c = characters.map((character) => {
  return character.name.split(' ')[0];
});
console.log(map1c);
// FILTER
//1. Get characters with mass greater than 100
const filter1 = characters.filter((character) =>{
  return character.mass >100;
})
console.log(filter1)
//2. Get characters with height less than 200
const filter2 = characters.filter((character) =>{
  return character.height < 200;
})
console.log(filter2)
//3. Get all male characters
const filter3 = characters.filter((character) =>{
  return character.gender == "male";
})
console.log(filter3)
//4. Get all female characters
const filter4 = characters.filter((character) =>{
  return character.gender == "female";
})
console.log(filter4)
// EVERY
//1. Does every character have blue eyes?
const every1 = characters.every((character) => {
  return character.eye_color === "blue";
});

console.log(every1);
//2. Does every character have mass more than 40?
const every2 = characters.every((character) => {
  return character.mass > 40;
});

console.log(every2);
//3. Is every character shorter than 200?
const every3 = characters.every((character) => {
  return character.height < 200;
});

console.log(every3);
//4. Is every character male?
const every4 = characters.every((character) => {
  return character.gender === "male";
});

console.log(every4);
// SOME
//1. Is there at least one male character?
const some1 = characters.some((character) =>{
  return character.gender === "male";
});
console.log(some1)
//2. Is there at least one character with blue eyes?
const some2 = characters.some((character) =>{
  return character.eye_color === "blue";
});
console.log(some2)
//3. Is there at least one character taller than 200?
const some3 = characters.some((character) =>{
  return character.height > 200;
});
console.log(some3)
//4. Is there at least one character that has mass less than 50?
const some4 = characters.some((character) =>{
  return character.mass < 50;
});
console.log(some4)