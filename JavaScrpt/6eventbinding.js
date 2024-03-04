console.log("Event binding practice");
function btnclick(){
    console.log("I am Clicked");
}
function update(){
    console.log('updated');
    var input = document.getElementById("myinput");
    console.log(input.value);
    var output = document.getElementById("output");
    output.innerHTML=input.value;
}
