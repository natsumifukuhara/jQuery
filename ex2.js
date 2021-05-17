"use strict";
$(function(){
    $("#text").css("color","blue");
    $("#btn").on("click", function(){$("#text").css("color","red");
    });
}
$("#btn").on("click",function(){$("#text").css("color","blue");

})
);
