



// questions javascript
$(".flashc").hide();
$("#first").show();
//intro
$("#quizstart").click(function() {
    $("#first").hide();
    $("firstques").show();
});
//question1
$("#firstques div").click(function() {
    $("#firstques").hide();
    $("#secondques").show();
});
//question2
$("#secondques div").click(function() {
    $("#secondques").hide();
    $("#thirdques").show();
});
//question3
$("#thirdques div").click(function() {
    $("#thirdques").hide();
    $("#fourthques").show();
});
//question4 last slide
$("#fourthques div").click(function() {
    $("#fourthques").hide();
    $("#score").show();
});