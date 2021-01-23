$(document).ready(function(){

    $(".add").click(function(){
      $(".productName").toggle();
    });

    $(".table-row .productCancel").click(function(){
        $("tr:last").remove();
        
        alert("HTML:"+$("tr:last .productName ").html());
      });

  });