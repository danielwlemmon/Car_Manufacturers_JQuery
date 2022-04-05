$(document).ready(function () {
  $("#tesla").hover(
    function () {
      $("#tesla_info").show();
    },
    function () {
      $("#tesla_info").hide();
    }
  );
});

$(document).ready(function () {
  $("#ford").hover(
    function () {
      $("#ford_info").show();
    },
    function () {
      $("#ford_info").hide();
    }
  );
});

$(document).ready(function(){
  $(".make").hover(function(){
      $(this).css("background-color", "lightgray");
  }, function(){
      $(this).css("background-color", "gray");
  });
});

$(document).ready(function () {
  $("#rivian").hover(
    function () {
      $("#rivian_info").show();
    },
    function () {
      $("#rivian_info").hide();
    }
  );
});

$(document).ready(function () {
  $("#polestar").hover(
    function () {
      $("#polestar_info").show();
    },
    function () {
      $("#polestar_info").hide();
    }
  );
});

$(document).ready(function () {
  $(".footer").dblclick(function(){
    $("*").css("background-color", "lightgray");
    $("#make_list").css("background-color", "gray");
    $("#make_list p").css("background-color", "gray");
  });
});
