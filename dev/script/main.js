const app = {}


app.enterence = () => {

}
 


app.events = () => {
    $("#menuicon").on("click", function (e) { 
        e.preventDefault();
        $("header").toggleClass("active");
        $("body").toggleClass("fixPosition");
    });

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
        });
        
        $("header").removeClass("active");
        $("body").removeClass("fixPosition");
	});
}



app.init = () => {
    $("body").removeClass("notDisplay");
}



$(function() {
    app.init();
    app.events();
});
