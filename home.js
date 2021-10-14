$(function(){
    
    var left = 0;
    if(left === 0){
        $(".artist").html("Yukata Nomese")
    }
    else if (left === 100){
        $(".artist").html("JiHyun")
    }
    else{
        $(".artist").html("GaYoon")
    }
    setInterval(function(){
        if(left < 200){
            left += 100;
        }
        else{
            left=0;
        }
        if(left === 0){
            $(".artist").html("Yukata Nomese")
        }
        else if (left === 100){
            $(".artist").html("JiHyun")
        }
        else{
            $(".artist").html("GaYoon")
        }
        $(".slider").css("left",-left+"%");
    },4000)
    $("#right").click(function(){
        if(left < 200){
            left += 100;
        }
        else{
            left=0;
        }
        $(".slider").css("left",-left+"%");
        if(left === 0){
            $(".artist").html("Yukata Nomese")
        }
        else if (left === 100){
            $(".artist").html("JiHyun")
        }
        else{
            $(".artist").html("GaYoon")
        }
    })
    $("#left").click(function(){
        if(left > 0){
            left -= 100;
        }
        else{
            left=200;
        }
        $(".slider").css("left",-left+"%");
        if(left === 0){
            $(".artist").html("Yukata Nomese")
        }
        else if (left === 100){
            $(".artist").html("JiHyun")
        }
        else{
            $(".artist").html("GaYoon")
        }
    })
})