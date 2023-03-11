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
 });



//  Handle tab menus

var tabButton = $('.tablinks');
var tabContent = $('.tabcontent');
console.log(tabButton);
console.log(tabContent);
// Set default 
tabButton[0].addClass('active');
tabContent[0].addClass('active');

function showtab(e, x) {
	e.preventDefault();
   console.log(tabContent[i]);
	for (var i = 0; i < tabButton.length; i++) {
      tabContent[i].removeClass('active');
      tabButton[i].removeClass('active');
	}
	// document.getElementById(x).classList.add('active');
   $('#'+x).addClass('active');
	e.currentTarget.parentElement.classList.add('active');
}