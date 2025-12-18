// const list = "vanilla, strawberry, chocolate, chocolate"

const flavors = prompt(
  "Please enter some (comma-separated) froyo flavors:",
  "vanilla, strawberry, chocolate, chocolate")

const flavorsArray = flavors.split(",");

function froyoOrders(flavorsArray) {
  const counts = {};

  for (let i = 0; i < flavorsArray.length; i++) {
    const cleanArray = flavorsArray[i].trim().toLowerCase();

    if (counts[cleanArray] === undefined) {
      counts[cleanArray] = 1
    }
    else {
      counts[cleanArray] += 1;
    }
  }
  return counts;
}

console.log()
// ).split(",").map(flavor => flavor.trim());

// froyoOrders.counts = {}

// for (let flavor of froyoOrders.flavors) {
//   if (froyoOrders.counts[flavor]) {
//     froyoOrders.counts[flavor] += 1
//   }
// }

// console.log(list)