window.onload = function() {
	var expansion = null; //是否存在展开的list
	var container = document.getElementById('box');
	//for(var i = 0; i < container.length; i++) {
		var x, y, X, Y, swipeX, swipeY;
		container.addEventListener('touchstart', function(event) {
			x = event.changedTouches[0].pageX;
			y = event.changedTouches[0].pageY;
			swipeX = true;
			swipeY = true;
			if(expansion) { //判断是否展开，如果展开则收起
				expansion.className = "box";
			}
		});
		container.addEventListener('touchmove', function(event) {
			//alert(1)
			X = event.changedTouches[0].pageX;
			Y = event.changedTouches[0].pageY;
			// 左右滑动
			if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
				// 阻止事件冒泡
				event.stopPropagation();
				if(X - x > 10) { //右滑
					event.preventDefault();
					this.className = "box swipeleft"; //右滑收起
					expansion = this;
				}
				if(x - X > 10) { //左滑
					event.preventDefault();
					this.className = "box"; //左滑展开
					
				}
				swipeY = false;
			}
			// 上下滑动
			if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
				swipeX = false;
			}
		});
	//}
	
	
	var xx, yy, xx1, yy1, sh = false;
	var oSanHui = document.getElementById('huiqu');

	//for(var i = 0; i < oSanLie.length; i++) {
		oSanHui.addEventListener('touchstart', function(e) {
			xx = e.touches[0].clientX;
			yy = e.touches[0].clientY;
			xx1 = xx;
			yy1 = yy;
			//console.log(x,y,x1,y1)
		}, false)

		oSanHui.addEventListener('touchmove', function(e) {
			xx1 = e.touches[0].clientX;
			yy1 = e.touches[0].clientY;
		}, false)
		oSanHui.addEventListener('touchend', function() {
			//console.log(xx, yy, xx1, yy1 + '>>>>')
			if(xx == xx1 && yy == yy1){
				//if(sh) {
					if($(this).index() == 0) {
						container.className = "box";
					} else {
						container.className = "box";
					}
			//}
				//console.log('eeeeeeee')
			}else{
				sh = false;
				//console.log('eeeeeeee')
			}
		})
	//}
	
	

}