"use strict";
$(function(){

    //ボタン押したら非同期処理かいし
    $("#get_address_btn").on("click",function(){
        $.ajax({
            url:"http://zipcoda.net/api",
            dataType:"jsonp",
            data:{zipcode:$("#zipcode").val()},
            async:true
               }).done(function(data){
                   console.dir(JSON.stringify(data));
                   $("#address").val(data.items[0].address);
               }).fail(function(XMLHttpReqyest,textStatus,errorThrown){
                   alert("見つかりません");
                   console.log("XMLHttpRequest:"+XMLHttpRequest.status);
                   console.log("textStatus:"+textStatus);
                   console.log("errorThrown:"+errorThrown.message)
               });
    });
});