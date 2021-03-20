let mql = window.matchMedia('(max-width: 1300px)');
$(function(){

    $("a.click").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1000);
	});

    $('.reviews-list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: $('.reviews-arrows'),
		nextArrow: '<img src="images/arrow-right.svg" class="slick-next" alt="">',
    	prevArrow: '<img src="images/arrow-left.svg" class="slick-prev" alt="">',
        dots: true,
        appendDots: $('.reviews-list-dots'),
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });   
        

});