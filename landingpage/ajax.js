// // Function to fetch and display stories
// function displayStories() {
//     $.ajax({
//       url: "https://usmanlive.com/wp-json/api/stories",
//       method: "GET",
//       dataType: "json",
//       success: function (data) {
//         var storiesList = $("#storiesList");
//         storiesList.empty();
//         $.each(data, function (index, story) {
//           storiesList.append(

//             `<div class="mb-3">
//                   <h3>${story.title}</h3>
//                   <div>${story.content}</div>
//                   <div>
//                       <button class="btn btn-info btn-sm mr-2 btn-edit" data-id="${story.id}">Edit</button>
//                       <button class="btn btn-danger btn-sm mr-2 btn-del" data-id="${story.id}">Delete</button>
//                   </div>
//               </div>
//               <hr />
//               `
//           );
//         });
//       },
//       error: function (error) {
//         console.error("Error fetching stories:", error);
//       },
//     });
//   }
//   // Function to delete a story
//   function deleteStory() {
//     let storyId = $(this).attr("data-id");
//     $.ajax({
//       url: "https://usmanlive.com/wp-json/api/stories/" + storyId,
//       method: "DELETE",
//       success: function () {
//         displayStories(); // Refresh the list after deleting a story
//       },
//       error: function (error) {
//         console.error("Error deleting story:", error);
//       },
//     });
//   }
//   function handleFormSubmission(event) {
//     event.preventDefault();
//     let storyId = $("#createBtn").attr("data-id");
//     var title = $("#createTitle").val();
//     var content = $("#createContent").val();
//     if (storyId) {
//       $.ajax({
//         url: "https://usmanlive.com/wp-json/api/stories/" + storyId,
//         method: "PUT",

//         data: { title, content },
//         success: function () {
//           displayStories(); // Refresh the list after creating a new story
//         },
//         error: function (error) {
//           console.error("Error creating story:", error);
//         },
//       });
//     } else {
//       $.ajax({
//         url: "https://usmanlive.com/wp-json/api/stories",
//         method: "POST",
//         data: { title, content },
//         success: function () {
//           displayStories(); // Refresh the list after creating a new story
//         },
//         error: function (error) {
//           console.error("Error creating story:", error);
//         },
//       });
//     }
//   }
//   function editBtnClicked(event) {
//     event.preventDefault();
//     let storyId = $(this).attr("data-id");
//     $.ajax({
//       url: "https://usmanlive.com/wp-json/api/stories/" + storyId,
//       method: "GET",
//       success: function (data) {
//         console.log(data);
//         $("#clearBtn").show();
//         $("#createTitle").val(data.title);
//         $("#createContent").val(data.content);
//         $("#createBtn").html("Update");
//         $("#createBtn").attr("data-id", data.id);
//       },
//       error: function (error) {
//         console.error("Error deleting story:", error);
//       },
//     });
//   }
//   $(document).ready(function () {
//     // Initial display of stories

//     displayStories();
//     $(document).on("click", ".btn-del", deleteStory);
//     $(document).on("click", ".btn-edit", editBtnClicked);
//     $("#createForm").submit(handleFormSubmission);
//     $("#clearBtn").on("click", function (e) {
//       e.preventDefault();
//       $("#clearBtn").hide();
//       $("#createBtn").removeAttr("data-id");
//       $("#createBtn").html("Create");
//       $("#createTitle").val("");
//       $("#createContent").val("");
//     });
//   });
$(function () {
  loadproducts();
  $("#products").on("click", ".btn-danger", deleteproducts);
  $("#addpro").click(addproducts);
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
