window.onload=function(){
	var kg=document.getElementById('kg');
	var rlkg=true;
	kg.onclick=function(){
		if(rlkg){
			kg.src='../img/shezhi/guan.gif';
			rlkg=!rlkg;
		}else{
			kg.src='../img/shezhi/kg.gif';
			rlkg=!rlkg;
		}
		
	}
	kg2.onclick=function(){
		if(rlkg){
			kg2.src='../img/shezhi/guan.gif';
			rlkg=!rlkg;
		}else{
			kg2.src='../img/shezhi/kg.gif';
			rlkg=!rlkg;
		}
		
	}
}
