let friends=["Sehrish","Annie","Sania"];
friends[6]="Mahwish";


console.log(friends.length);

//searching
let searchafriend =friends.find(searching);
function searching(frnd){
    if(frnd=="Mahwish") return true;
    else return false;
}
friends.sort();
console.log(friends);
console.log(...friends);
console.log(searchafriend);
//splicing
friends.splice(2,0,"zameer");
console.log(friends);
//custmized sorting
friends.sort(custom);
function custom(a,b){
    if(b<a) return -1;
    else return 1;
}
console.log(friends);
//mapping
let values = [2,6,9];
let newval=values.map(function(r){
    return r+5;
})
console.log(values);
console.log(newval);
//arrow functions
function test1(){
    return "Sehrish1";
}
console.log(test1());
let test2 = () =>{
    return "Sehrish2";
}
console.log(test2());
let test3 = () => "Sehrish3";
console.log(test3());
function test4(name){
    return name;
}
console.log(test4("Sehrish4"));
let test5 = (name) => name;
console.log(test5("sehrish5"));
//ifelse
function test6(name){
    if(name=="sehrish") return true;
    else return false;
}
console.log(test6("sehrish"));

let test7 = name =>(name=="sehrish"?true:false)
console.log(test7("sehrish"));

console.log(4<9?"this is true":"this is false");
console.log(4>9?"this is true":"this is false");
console.log(5<9&&"this is amazing");
console.log(5>9&&"this is amazing");

//object handling
//object destructuring
let address={
    street:"20",
    house:"f/5",
    area:"defence"
}
//console.log(address.house);
//now destructure the object
const{street,house,area}=address;
console.log(street);
function gettinghouse(house,street,area){
    console.log("house "+house+" is located in street "+street+ " in "+area);
}
gettinghouse(house,street,area);
