setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display","none");
    },1000);
},1500);