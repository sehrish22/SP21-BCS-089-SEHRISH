$(function () {
  $("#mybutton1").click(handlings);
  //$("#myul1 li").click(deleting);
  $("#myul1").on("click", "li", deleting);
});
function handlings() {
  var myinput1 = $("#myinput1").val();
  if (!myinput1) {
    $("#myinput1").addClass("error");
    return;
  }
  $("#myinput1").removeClass("error");
  $("#myinput1").val("");
  $("#myul1").append("<li>" + myinput1 + "</li>");
  //$("#myul1 li").click(deleting);
}
function deleting() {
  $(this).remove();
}
