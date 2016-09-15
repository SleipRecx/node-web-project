
$(document).ready(function(){
    $("#dinner-getting-section").hide();
    $("#dinner-list-section").show();
});

$(document).ready(function(){
    $("#add-dinner-link").click(function () {
        $("#dinner-getting-section").hide();
        $("#dinner-list-section").show();
        $('html, body').animate({ scrollTop: 500 }, 500);
    });
});

$(document).ready(function () {
    $("#get-dinner-link").click(function () {
        $("#dinner-list-section").hide();
        $("#dinner-getting-section").show();
        $('html, body').animate({ scrollTop: 500 }, 500);
    });
});

$(document).ready(function () {
    $("#add-dinner").click(function () {
        $("#dinner-list").append($('<li>', {
            text: $('#name').val()
        }));

    });
});

$(document).ready(function () {
    $("#get-dinner").click(function () {
        var text_val = $('#dinner-list').children().eq((Math.floor((Math.random() * 4) + 1))).text();
        $("#dinner-result").text(text_val);
    });
});



