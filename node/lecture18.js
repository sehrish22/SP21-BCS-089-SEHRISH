let point = {
  x: 10,
  y: 20,
};
console.log(point);
point.x = 50;
point.z = 30;
point["a"] = "sehrish";
console.log(point);
console.log(point["z"]);
//by reference
let a = 10;
let b = a;
a = 20;
console.log(a);
console.log(b);
let data = {
  name: "sehrish",
  age: "10",
};
let newdata = data;
data.name = "fatima";
console.log(data);
console.log(newdata);
let copy = {
  hi: "hello",
};
let newcopy = Object.assign({}, copy);
let newnewcopy = { ...copy };
copy.hi = "hithere";
console.log(copy);
console.log(newcopy);
console.log(newnewcopy);

let q = 10;
function inc(q) {
  q++;
}
inc(q);
console.log(q);
let w = { val: 20 };
function incr(w) {
  w.val++;
}
incr(w);
console.log(w.val);
