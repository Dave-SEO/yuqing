$(function(){
	var Btn=$('.hiddenItem');
	var item=$('.js');
	//console.log(item)
	/*Btn.click(function(){
		item.slideToggle("slow");
	})*/
	Btn.click(function(){
		item.toggleClass("flag");
	});

	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween:0,
        mousewheelControl: true
    });
})