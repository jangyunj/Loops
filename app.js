let jokes = {
  joke1: "ChuckNoriss1",
  joke2: "ChuckNoriss2",
  joke3: "ChuckNoriss3",
  joke4: "ChuckNoriss4",
};

//for in - enumerable string properties
for (let joke in jokes) {
  console.log(joke);
}

for (let joke in jokes) {
  console.log(jokes[joke]);
}

//for of - values of iterable object
//arrays, strings, maps, nodelists etc
let array = [1, 2, 3, 4, 5];

for (let a of array) {
  console.log(a);
}

//while
let x = 10;
while (x <= 50) {
  console.log(x);
  x += 10;
}

//break
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  } else {
    console.log(i);
  }
}

//continue
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  } else {
    console.log(i);
  }
}
