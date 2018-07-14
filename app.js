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
    addNewRow(response.data, strainName);
  });
});
function addNewRow (data, strainName) {
  var img = data[0].image;
  var newRow = $("<tr>").prepend(
    $("<td>").text(strainName),
    $("<td>").text(data[0].genetics.names),
    $("<td>").append($('<img>').attr('src', img))
  );
  $("#strain-table > tbody").prepend(newRow);
}