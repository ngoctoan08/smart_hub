// Handle droplist in content

var btnContentItem = $(".toggle_a");
btnContentItem.on('click', function() {
    var iconContentItem = $(".toggle_a span i");
    var context = $('.content-item p');
    var a = $(this);
    if(!a.hasClass("active")) {
        a.addClass("active");
        a.siblings().css("display", "block");
        console.log(a.children().children());
        console.log(a.siblings());
        a.children().children().css("transform", "rotate(0deg)");
    } else {
        a.removeClass("active");
        a.siblings().css("display", "none");
        a.children().children().css("transform", "rotate(-90deg)");
    }
    

    
    // console.log(a.siblings().find("p"));
    // a.toggleClass("active").siblings().slideToggle();
    // if(a.hasClass("active")) {
    //     a.children().children().css("transform", "rotate(0deg)");
    //     a.parent().siblings().find('a').removeClass('active').siblings().slideUp();
    // }
    // else {
    //     iconContentItem.css("transform", "rotate(-90deg)");
    // }
    // a.parent().children().children().css("transform", "rotate(-90deg)");

    // rotate icon
 });


//  Handle droplist 

//  Handle tab menus

function showtab(e, tabName) {
    e.preventDefault();
    var tabButton = $('.tablinks');
    var tabContent = $('.tabcontent');
    for (var i = 0; i < tabButton.length; i++) {
        console.log(tabButton[i].className);
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    for (var i = 0; i < tabContent.length; i++) {
        // tabContent[i].css("display", "none");
        tabContent[i].style.display = "none";
        // document.getElementById(x).classList.add('active');
    }
    $('#' + tabName).css("display", "block");
    e.currentTarget.parentElement.className += " active";
    console.log(e.currentTarget);

}