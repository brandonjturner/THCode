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
    addNewRow(response.data, strainName, 1, 2, 3);
  });
});

function addNewRow (data, strainName, moreargs, anotherone, thiojwefoij) {
  console.log(data[0]);
  var img = data[0].image;
  var newRow = $("<tr>").append(
    $("<td>").text(strainName),
    $("<td>").text(data[0].genetics.names),
    $("<td>").append($('<img>').attr('src', img))
  );
  $("#strain-table > tbody").append(newRow);
}