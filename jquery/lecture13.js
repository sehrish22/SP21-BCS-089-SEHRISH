$(function () {
    loadproducts();
  });
  function loadproducts() {
    $.ajax({
      url: "https://usmanlive.com/wp-json/api/stories",
      method: "GET",
      success: function (response) {
        console.log(response);
        var products = $("#products");
        products.empty();
        //   for (var i = 0; i < response.length; i++) {
        //     products.append("<div><h4>title of product</h4></div>");
        //   }
        for (var i = 0; i < response.length; i++) {
          var produ = response[i];
          products.append("<div><h4>" + produ.title + "</h4></div>");
        }
        for (var i = 0; i < response.length; i++) {
          var prod = response[i];
          for (var i = 0; i < response.length; i++) {
            var prod = response[i];
            products.append(
              `<div class="produc" data-id="${prod._id}"><h4>${prod.title}</h4><p>${prod.content}<button class="btn btn-warning btn-xl float-right">EDIT</button><button class="btn btn-danger btn-xl float-right">DELETE</button></p></div>`
            );
          }
        }
      },
    });
  }
  