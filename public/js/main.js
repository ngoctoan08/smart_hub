// Handle droplist in content
 var btnContentItem = $(".toggle_a");
 var iconContentItem = $(".toggle_a span i");
 var context = $('.content-item p');

 if (btnContentItem.hasClass("active")) {

 }

 btnContentItem.on('click', function() {
    var a = $(this);
    a.toggleClass("active").siblings().slideToggle();
    a.parent().siblings().find('a').removeClass('active').siblings().slideUp();
    // rotate icon
    // if(a.parent().siblings().find('a').hasClass("active")) {
    //     alert(123);
    //     a.children().find("i").css("transform", "rotate(0)");
    // } else {
    //     a.children().find("i").removeAttr("style");
    // }
 });