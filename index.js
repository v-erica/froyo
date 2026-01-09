const flavors = prompt(
  "Please enter some (comma-separated) froyo flavors:",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const flavorsArr = flavors.split(",");
const cleanArr = flavorsArr.map((flavor) => flavor.trim());

function flavorsCount(cleanArr) {
  const counts = {};

  for (const flavor of cleanArr) {
    if (flavor in counts) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
    return counts;
  }
}
const counts = flavorsCount(cleanArr);

console.table(counts);
