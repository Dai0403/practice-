const toUpper = function (str) {
  return str.toUpperCase();
};
const cats = [`Pepper`, `Caramel`, `Mu`, `Peach`];
const upperCats = cats.map(toUpper);
console.log(upperCats);

for (let cat of cats) {
  console.log(cat);
}

function startP(el) {
  return el.startsWith(`P`);
}
const catsP = cats.filter(startP);
console.log(catsP);
