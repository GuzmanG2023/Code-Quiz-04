// questions javascript
$(".flashc").hide();
$("#first").show();
//intro
$("#startbtn").click(function() {
    $("#first").hide();
    $("#firstques").show();
});
//question1
$("#firstques div").click(function() {
    console.log("This is",$(this).attr("id"))
    $("#firstques").hide();
    $("#secondques").show();
        if ($(this).attr("id") === "answerC") {
            console.log ("correct answer")
        } else {
            console.log ("wrong answer")
        }

});
//question2
$("#secondques div").click(function() {
    console.log("This is",$(this).attr("id"))
    $("#secondques").hide();
    $("#thirdques").show();
    if ($(this).attr("id") === "answerA2") {
        console.log ("correct answer")
    } else {
        console.log ("wrong answer")
    }
});
//question3
$("#thirdques div").click(function() {
    console.log("This is",$(this).attr("id"))
    $("#thirdques").hide();
    $("#fourthques").show();
    if ($(this).attr("id") === "answerA3") {
        console.log ("correct answer")
    } else {
        console.log ("wrong answer")
    }
});
//question4 last slide
$("#fourthques div").click(function() {
    console.log("This is",$(this).attr("id"))
    $("#fourthques").hide();
    $("#score").show();
    if ($(this).attr("id") === "answerB4") {
        console.log ("correct answer")
    } else {
        console.log ("wrong answer")
    }
});

$( "#name" ).submit(function( event ) {
    event.preventDefault();
    //alert( "Handler for .submit() called." );
    console.log($(this).children().val())
});