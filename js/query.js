$(document).ready(function(){
  $("#searchInput").on("keyup", function() {
    let value = $('#searchInput').val().toLowerCase();
    $("#myDiv .hide").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});