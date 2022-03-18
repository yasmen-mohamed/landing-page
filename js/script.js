let sectionOffset=$("#section2").offset().top;
let navContainer=$("#navContainer");

$(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    if(wScroll>sectionOffset )
    {
        
        $("#main-nav").css("backgroundColor","rgba(255, 96, 87, 0.8)");
        $("#main-nav").css("padding","0px 60px");
        // $("#navContainer").classlist("w-75","w-100");
        navContainer.css("width","100%");
    }
    else
    {
        $("#main-nav").css("backgroundColor","transparent");
        $("#main-nav").css("padding","0px 0px");
        // navContainer.classList.replace("w-100","w-75");
        navContainer.css("width","75%");
        
            
    }
    
})

$(document).ready(function() {
    $(".skitter-large").skitter();
  });