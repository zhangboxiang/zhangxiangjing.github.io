$(function(){
	var arr = [];
	$('#btn').bind('touchend',function(){
		if($('#fa').val() == ''){
			
		}else{
			arr = [];
			arr.push($('#fa').val());
			$('#fa').val('')
			///alert(arr)
			for(var i=0;i<arr.length;i++){
				$('.san-con').append('<div class="news-right"><div class="tou-1"></div><p>'+arr[i]+'</p></div>')
			}
		}
	})
})
