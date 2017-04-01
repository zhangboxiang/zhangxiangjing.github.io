window.onload = function(){
	var timer;
	var index = 0;
$('#ul').html($('#ul').html()+$('#ul').html()).width('1000%').find('li').width('10%');
$('#banner').on({
	'swipeLeft':show,
	'swipeRight':function(){
		index--;
		if(index == -1){
			$('ul').css({
				'transform':'translateX(-50%)'
			})
			index = $('#ul>li').length/2 - 1;
		}
		$(this).find('ul').animate({
			'translateX':-index*10+'%'
		},300,'ease')
		$(this).find('#ol>li').removeClass('active');
		$(this).find('#ol>li').eq(index%$('#ol>li').length).addClass('active')
	}
})
var needX,newX,nows,n;
	$("#ul").bind("touchstart",function(e){
		clearInterval(timer);
		$(this).css("-webkit-transition","0s")
		needX=e.touches[0].clientX;
		nows=e.touches[0].clientX-$("#ul").offset().left;
	},false)
	$("#ul").bind("touchmove",function(e){
		clearInterval(timer);
		newX = needX-e.touches[0].clientX;
		n=e.touches[0].clientX-nows
		if(n>0){
			n=0
		}
		$(this).css("transform","translateX("+(n)+"px)")
		//console.log(newX%innerWidth);
	},false)
	$('#ul').bind('touchend',function(){
		clearInterval(timer);
		timer = setInterval(show,2000);
		if(newX>0&&newX<=30){
			$(this).css("transform","translateX("+(-index*10)+"%)")
			$(this).css("-webkit-transition",".5s")
		};
		if(newX<0&&(-newX)<=30){
			$(this).css("transform","translateX("+(-index*10)+"%)")
			$(this).css("-webkit-transition",".5s")
		};
	},false)
	
	
	//ding
	timer = setInterval(show,2000);
	
	
	
	
	//hanshu
	function show(){
		index++;
		$("#banner").find('ul').animate({
			'translateX':-index*10+'%'
		},300,'ease',function(){
			if(index == $('#ul>li').length/2){
				$('#ul').css({
					'transform':'translateX(0)'
					
				})
				
				$("#ol li").eq(0).addClass('active').siblings().removeClass("active");
//				alert($(this).find('#ol>li').eq(0))
				index = 0;
			}
		})
		$("#banner").find('#ol>li').removeClass('active');
		$("#banner").find('#ol>li').eq(index%('#ol>li').length).addClass('active');
	}
}