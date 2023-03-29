// Handle droplist in content

var btnContentItem = $(".toggle_a");
btnContentItem.on('click', function() {
    var a = $(this); //a is this btn when user click
    if (!a.hasClass("active")) {
        a.addClass("active");
        a.siblings().css("display", "block");
        a.children().children().css("transform", "rotate(0deg)");
    } else {
        a.removeClass("active");
        a.siblings().css("display", "none");
        a.children().children().css("transform", "rotate(-90deg)");
    }
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
        tabContent[i].style.display = "none";
    }
    $('#' + tabName).css("display", "block");
    e.currentTarget.parentElement.className += " active";
}

function showtab1(e, tabName) {
    e.preventDefault();
    var tabButton = $('.tablinks1');
    var tabContent = $('.tabcontent1');
    for (var i = 0; i < tabButton.length; i++) {
        console.log(tabButton[i].className);
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    $('#' + tabName).css("display", "block");
    e.currentTarget.parentElement.className += " active";
}