$(function(){


	var Mixer = mixitup ( '.product__items' );

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: '12px',
		readOnly: true
	});

	$('.product-slider__items').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: false
	});


});
