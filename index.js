$('.close-burger').hide();
$(".open-burger").click(function(){
    $(".nav-right").show();
    $('.close-burger').show();
    $('.open-burger').hide();
});
$(".close-burger").click(function(){
    $(".nav-right").css('display', 'none');
    $('.open-burger').show();
    $('.close-burger').hide();
});
$(".nav-right a").click(function(){
    $(".nav-right").css('display', 'none');
    $('.open-burger').show();
    $('.close-burger').hide();
});