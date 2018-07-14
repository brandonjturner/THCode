$("#add-strain-btn").on("click", function(event) {
  event.preventDefault();
  var strainName = $("#strain-name-input").val().trim();
var queryURL = "https://cors-anywhere.herokuapp.com/https://www.cannabisreports.com/api/v1.0/strains/search/" + strainName;
$.ajax({
  url: queryURL,
  method: "GET",
  headers: {
},
}).then(function(response) {
  console.log(response);
});
});
var newRow = $("<tr>").append(
  $("<td>").text(response[0].lineage.name);
  $("<td>").text(response[0].genetics);
  $("<td>").text(response[0].genetics.image));
$("#strain-table > tbody").append(newRow)