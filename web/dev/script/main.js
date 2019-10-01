const app = {}


app.enterence = () => {

}
 
app.lineColor = () => {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 1199) {
            $("#line").css("background", "linear-gradient(to bottom, #0d475a 0%, #40798C 100%")
            console.log("1");
        } else if ($(this).scrollTop() > 1200 && $(this).scrollTop() < 2499) {
            $("#line").css("background", "linear-gradient(to bottom, #40798C 0%, #70A9A1 100%")
            console.log("2");
        } else if ($(this).scrollTop() > 2500 && $(this).scrollTop() < 3999) {
            $("#line").css("background", "linear-gradient(to bottom, #70A9A1 0%, #CFD7C7 100%")
            console.log("3");
        } else if ($(this).scrollTop() > 4000) {
            $("#line").css("background", "linear-gradient(to bottom, #CFD7C7 0%, #F6F1D1 100%")
            console.log("4");
        }
     });
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
    app.lineColor();
    
}



$(function() {
    app.init();
    app.events();
    
});
