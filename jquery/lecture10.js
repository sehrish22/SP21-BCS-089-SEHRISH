$(function () {
  $("#mybutton").click(sendrequest);
});
function sendrequest() {
  $.get("lecture10.txt", responcerequest);
}
function responcerequest(Response) {
  $("#mydiv").empty();
  $("#mydiv").append(Response);
}
// $(function () {
//   $("#mybutton").click(function () {
//     $.get("lecture10.txt", function (Response) {
//       $("#mydiv").empty();
//       $("#mydiv").append(Response);
//     });
//   });
// });
