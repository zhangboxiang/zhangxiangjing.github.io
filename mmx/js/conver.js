window.onload = function() {
	//	var needx, newxs = 0,
	//		nows;
	//	var newY = NewY = 0;
	//	var now = 0;
	//	var a = 0;
	//	var oSan = document.getElementById('san-lie').children;
	//
	//	for(var i = 0; i < oSan.length; i++) {
	//		/*滑动*/
	//		oSan[i].addEventListener('touchstart', function(e) {
	//			needx = e.touches[0].clientX;
	//			this.style.transition = "0s";
	//		}, false)
	//		oSan[i].addEventListener('touchmove', function(e) {
	//			if(a == 0) {
	//				newxs = e.touches[0].clientX - needx;
	//				if(newxs > 0) {
	//					this.style.transform = 'translateX(0px)';
	//				} else {
	//					if(Math.abs(newxs) >= this.children[1].offsetWidth) {
	//						this.style.transform = 'translateX(-' + this.children[1].offsetWidth + 'px)';
	//					} else {
	//						this.style.transform = 'translateX(' + (newxs) + 'px)';
	//					}
	//				}
	//			} else {
	//				this.style.transform = 'translateX(-' + this.children[1].offsetWidth + 'px)';
	//				newxs = (e.touches[0].clientX - needx);
	//				if(newxs >= 0) {
	//					this.style.transition = ".5s";
	//					this.style.transform = 'translateX(0px)';
	//					//					alert()
	//				} else {
	//					if(Math.abs(newxs) >= this.children[1].offsetWidth) {
	//						this.style.transform = 'translateX(-' + this.children[1].offsetWidth + 'px)';
	//					} else {
	//						this.style.transform = 'translateX(' + (newxs) + 'px)';
	//					}
	//				}
	//			}
	//
	//		}, false)
	//		oSan[i].addEventListener('touchend', function(e) {
	//			a = Math.abs(newxs);
	//			if(Math.abs(newxs) <= 50) {
	//				this.style.transition = ".5s";
	//				this.style.transform = 'translateX(0px)';
	//
	//			} else {
	//				if(newxs < 0) {
	//					this.style.transition = ".5s";
	//					this.style.transform = 'translateX(-' + this.children[1].offsetWidth + 'px)';
	//				}
	//			}
	//		}, false)
	//
	//		/*滑动end*/
	//
	//	}

	var expansion = null; //是否存在展开的list
	var container = document.getElementById('san-lie').children;
	for(var i = 0; i < container.length; i++) {
		var x, y, X, Y, swipeX, swipeY;
		container[i].addEventListener('touchstart', function(event) {
			x = event.changedTouches[0].pageX;
			y = event.changedTouches[0].pageY;
			swipeX = true;
			swipeY = true;
			if(expansion) { //判断是否展开，如果展开则收起
				expansion.className = "";
			}
		});
		container[i].addEventListener('touchmove', function(event) {

			X = event.changedTouches[0].pageX;
			Y = event.changedTouches[0].pageY;
			// 左右滑动
			if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
				// 阻止事件冒泡
				event.stopPropagation();
				if(X - x > 10) { //右滑
					event.preventDefault();
					this.className = ""; //右滑收起
				}
				if(x - X > 10) { //左滑
					event.preventDefault();
					this.className = "swipeleft"; //左滑展开
					expansion = this;
				}
				swipeY = false;
			}
			// 上下滑动
			if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
				swipeX = false;
			}
		});
	}

	/*删除*/
	$('.how-2').bind('touchend', function() {
		$(this).parents('li').remove();
	})

	$('.how-1').bind('touchend', function() {
		$(this).parents('ul').prepend($(this).parents('li'));
	})

	var MnewY = MynewY = myneedY = san = 0;
	var oSanZon = document.getElementById('san-zon');
	oSanZon.addEventListener('touchstart', function(e) {
		this.style.transition = '0s';
		MnewY = e.touches[0].clientY;
	}, false)
	oSanZon.addEventListener('touchmove', function(e) {
		MynewY = e.touches[0].clientY;
		//console.log(san + (-(MnewY - MynewY)))
		myneedY = san + (-(MnewY - MynewY));
		this.style.transform = 'translateY(' + (myneedY / 20) + 'rem)'
		if(myneedY >= 50) {
			this.style.transform = 'translateY(' + (50 / 20) + 'rem)'
		} else if(myneedY < 0) {
			this.style.transform = 'translateY(' + (0) + 'rem)'
		}
	}, false)

	oSanZon.addEventListener('touchend', function() {
		if(myneedY >= 0) {
			this.style.transition = '0.5s';
			this.style.transform = 'translateY(' + 0 + 'rem)'
		} else if(myneedY <= -50) {
			this.style.transition = '0.5s';
			this.style.transform = 'translateY(' + (0) + 'rem)'
		}
	}, false)

	/*点击跳转*/

	var xx, yy, xx1, yy1, sh = false;
	var oSanLie = document.getElementsByClassName('san-show');

	for(var i = 0; i < oSanLie.length; i++) {
		oSanLie[i].addEventListener('touchstart', function(e) {
			xx = e.touches[0].clientX;
			yy = e.touches[0].clientY;
			xx1 = xx;
			yy1 = yy;
			//console.log(x,y,x1,y1)
		}, false)

		oSanLie[i].addEventListener('touchmove', function(e) {
			xx1 = e.touches[0].clientX;
			yy1 = e.touches[0].clientY;
		}, false)
		oSanLie[i].addEventListener('touchend', function() {
			//console.log(xx, yy, xx1, yy1 + '>>>>')
			if(xx == xx1 && yy == yy1){
				//if(sh) {
					if($(this).index() == 0) {
						location.href = 'huihua.html'
					} else {
						location.href = 'chat.html'
					}
			//}
				//console.log('eeeeeeee')
			}else{
				sh = false;
				//console.log('eeeeeeee')
			}
		})
	}

}