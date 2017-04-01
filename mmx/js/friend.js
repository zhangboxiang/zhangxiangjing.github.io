$(function(){
	$('.san-com li').bind('touchend',function(){
		if($(this).index()==0){
			location.href='huihua.html'
		}else{
			location.href='chat.html'
		}
	})
})
