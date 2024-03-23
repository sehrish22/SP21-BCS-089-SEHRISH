window.onload = function () {
  var btn = document.getElementById("1button");
  btn.onclick = function () {
    var myid = document.getElementById("myid").value;
    var myul = document.getElementById("myul");
    var newinput = document.createTextNode(myid);
    var newli = document.createElement("li");
    newli.appendChild(newinput);
    myul.appendChild(newli);
    var newButton = document.createElement("button");
    myul.appendChild(newButton);
    //  newButton.setAttribute("onclick", "blah(this.parentNode.value)")
  };
};
function deleting(e) {
  var tag = e.target;
  tag.parentNode.removeChild(tag);
}
function deletingg(ee) {
  var tag = ee.target;
  var li = tag.parentNode;
  li.parentNode.removeChild(li);
}
function addboth() {
  var btn = document.getElementById("4button");
  btn.onclick = function () {
    var mmmid = document.getElementById("mmmid").value;
    var my4ul = document.getElementById("my4ul");
    var newinput3 = document.createTextNode(mmmid);
    var newli3 = document.createElement("li");
    newli3.appendChild(newinput3);
    my4ul.appendChild(newli3);
  };
}

// function deleting(e) {
//     var btn = document.getElementById("2button");
//     btn.onclick = function(e){
//         var tag = e.target;
//         tag.parentNode.removeChild(tag);
//     }

// }
