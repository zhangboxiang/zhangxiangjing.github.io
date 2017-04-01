window.onload=function(){
	
	//  排行切换
	var ali=document.getElementById('rl_nav').children;
	var adiv=document.getElementById('fy_zong').children;
	   for(var i = 0; i < ali.length; i++) {
			ali[i].index = i;
			ali[i].onclick = function() {
				for(var i = 0; i < ali.length; i++) {
					ali[i].className = '';
					adiv[i].style.display = 'none';
				}
				i = this.index;
				this.className = "rl_boder";
				adiv[i].style.display = 'block';

			}
		}
	   
//	排行切换2   
    var rlshow=document.getElementById('rlshow');
    var rla=rlshow.getElementsByTagName('a');
    for(var i=0;i<rla.length;i++){
    	rla[i].index=i;
    	rla[i].onclick=function(){
    		for(var i=0;i<rla.length;i++){
    			rla[i].className='';
    		}
    		i = this.index;
    		rla[i].className='rl_red'
    	}
    }
	
}
