$(function () {
  loadproducts();
  $("#products").on("click", ".btn-danger", deleteproducts);
  $("#addpro").click(addproducts);
  $("#add")
});
function loadproducts() {
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories",
    method: "GET",
    error: function (response) {
      var products = $("#products");
      products.html("Error Occured");
    },
    success: function (response) {
      var products = $("#products");
      products.empty();

      for (var i = 0; i < response.length; i++) {
        var prod = response[i];
        products.append(
          `<div class="produc" data-id="${prod.id}"><h4>${prod.title}</h4><p>${prod.content}<button class="btn btn-warning btn-xl float-right">EDIT</button><button class="btn btn-danger btn-xl float-right">DELETE</button></p></div>`
        );
      }
    },
  });
}
function deleteproducts() {
  //brings the tag(of button) which is clicked
  var btnn = $(this);
  //storing div on whose button is clicked and stored in btnn
  var parDiv = btnn.closest(".produc");
  //getting id of that button
  let id = parDiv.attr("data-id");
  console.log(id);
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories/" + id,
    method: "DELETE",
    success: function () {
      loadproducts();
    },
  });
}
function addproducts() {
  var title = $("#createTitle").val();
  var descrip = $("#createContent").val();
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories",
    method: "POST",
    data: { title, descrip },
    success: function (response) {
      $("#createTitle").val("");
      $("#createContent").val("");
      loadproducts();
    },
  });
}
function editproducts(){

}
