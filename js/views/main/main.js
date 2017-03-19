define(['jquery'],function(require){
	return Main = {
//		addVal:parseInt($('#numVal').val()),
//		showNum:parseInt($('.cartnums').text()),
		init:function(){
//			$('.cartnums').text(Main.addVal + Main.showNum);
		},
		canvas:function(){
			var imgLen = $('#productList').find('canvas').size();
			if(imgLen > 0){
				$('#productList').find('canvas').each(function(){
					var src = $(this).data('src');
					var Img = new Image();
					var canvas = $(this)[0];
					var cvs = canvas.getContext('2d');
					Img.src = src;
					if(cvs){
						Img.onload = function(){
							canvas.width = this.width;
							canvas.height = this.height;
							cvs.drawImage(this,0,0);
							$(canvas).css('background-image','none');
						}
					}
				})
			}
		},
		addNum:function(){
			var numVal = parseInt($(this).prev().val());
			if(!isNaN(numVal) && numVal > 0){
				if(numVal < 99){
					numVal++;
				}
				$(this).prev().val(numVal);
			}else{
				$(this).prev().val('1');
			}
		},
		reduceNum:function(){
			var numVal = parseInt($(this).next().val());
			if(!isNaN(numVal) && numVal > 1){
				numVal--;
				$(this).next().val(numVal);
			}else{
				$(this).next().val('1');
			}
		},
		addCart:function(){
			var addVal = parseInt($('#numVal').val());
			var showNum = parseInt($('.cartnums').text());
			localStorage.setItem('cartNum',showNum);
			var fImg = $('#flyImg'),
				src = fImg.children('img').attr('src'),
				x = fImg.offset().left + 30,
				y = fImg.offset().top - 10,
				X = $('#nav_2').offset().left,
				Y = $('#nav_2').offset().top;
			if($('#flyDiv').size() <= 0 && addVal + showNum < 100){
				$('body').append('<div id="flyDiv"><img src="'+ src +'" width="60" height="60" /></div>')
			};
			var $obj = $('#flyDiv');
			if(addVal + showNum < 100){
				if(!$obj.is(':animated')){
					$obj.css({'left':x, 'top':y}).animate({"left":X, "top":Y-80},700,function(){
						$obj.stop(false,false).animate({"top":Y-10, "opacity":0},700,function(){
							$obj.fadeOut(300,function(){
								$obj.remove();
								$('.cartnums').text(addVal + showNum);
							})
						})
					})
				}
			}else{
				alert('亲，购物车空间不够了')
			}
		},
		initAddress:function(){
			if($("input[name='showNewAddr']").prop('checked')){
				$('.newAddr').show();
			}else{
				$('.newAddr').hide();
			}
		},
		
	}
});