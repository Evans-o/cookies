// 
$(document).ready(function() {
  $("button").click(function(){
      var countries = [];
      $.each($(".country option:selected"), function(){            
          countries.push($(this).val());
      });
      alert("You have selected - " + countries.join(", "));


      prompt("Delivery?");
  });
});