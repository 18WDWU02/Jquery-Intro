//alert("Javascript is loaded in");
//console.log("Javascript is loaded in");

/*
    Multi Line Comments
    Can use as many lines as you want between the two tags
*/
$(document).ready(function(){

    // $("div")
    // $(".green")
    // $("#box1")
    // $("div#box1")
    // $("ul li")

    $("#box1").click(function(){
        console.log("green box is clicked");
    });
    $("#box2").dblclick(function(){
        console.log("red box is clicked");
    })
    //COMMON EVENTS
    // click() click
    // dblclick() double click
    // mouseover() when our mouse is over it
    // mouseleave() when our mouse leave the object
    // hover() a mix of both mouseover and mouseleave
    // mousedown() when we click down
    // mouseup() when up lift our finger of the click
    // keydown() when you type a key down
    // keyup() when you life your finger off the key
    // focus() when we enter into a form element
    // blur() when we leave the form element
    // submit() when a form has been submited

    //COMMON EFFECTS

    // event.preventDefualt();
    $("#myForm").submit(function(){
        event.preventDefault();
        console.log("do this instead");
    });

    $("#box1").click(function(){
        // $("#box2").hide();
        // $("#box2").show();
        // $("#box2").toggle(5000);
        // $("#box2").fadeOut(5000);
        // $("#box2").fadeIn();
        // $("#box2").addClass("wider");
        // $("#box2").removeClass();
        // $("#box2").toggleClass("wider");
        // $("#box2").css("background-color", "pink");
        $("#box2").css({"background-color":"pink", "width":"500px"})
    });








});
