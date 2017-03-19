require.config({
	paths:{
		jquery:"../../libs/jquery.min",
		swiper:"../../plugs/swiper.min",
		diqu:"../../plugs/diqu2",
		Main:"../../views/main/main"
	}
});
require(['jquery','swiper','Main','diqu'],function($,swiper,Main,diqu){
	$(function(){
		var topSlider = new Swiper('.swiper-container',{
			slidesPerView: 1,
            centeredSlides: true,
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction: false,
            pagination : '.swiper-pagination',
			paginationClickable :true,
		});
		
//		$('.cartnums').text(parseInt(localStorage.getItem('cartNum'))+1);
		Main.init();
		Main.canvas();
		$('.add').on('click',Main.addNum);
		$('.reduce').on('click',Main.reduceNum);
		$('#addCartBtn').on('click',Main.addCart);
		$('.delBtn').on('click',function(){
			$(this).parents('li').remove();
			if($('.cartList').children('li').size() < 1){
				$('.nullShop').show();
			}
		});
		$('.allDel').on('click',function(){
			$('.delBtn').trigger('click');
		});
		$('.addressList').delegate('ul','click',function(){
			$('.addressList').find('input').each(function(){
				$(this).prop("checked", false);
			});
			$(this).children().eq(0).children().eq(0).prop("checked", true);
			Main.initAddress();
		});
		if($("select[name='sheng']").length>0){
            new PCAS("sheng","shi","qu","","","");
       };
       $('#topNav').delegate('li','click',function(){
       		$(this).addClass('choose').siblings('li').removeClass('choose');
       		var Index = $(this).index();
       		$('.contentWrap').eq(Index).show().siblings().hide();
       });
       $('.orderItems').delegate('.delOrder','click',function(){
       		$(this).parents('.orderItems').remove();
       })
	})
})
