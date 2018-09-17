$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      
  
      var newDevouredState = {
        devoured: true
      };
  

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
         location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newburger = {
        burger_name: $("#ca").val().trim(),
        };
  
    $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
  });
  