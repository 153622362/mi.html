onload= function(){
	// 轮播
	var a = document.getElementsByClassName('lunbo1');
	var d = document.getElementsByClassName('banner_d');
	var alen = a.length - 1;
	var dlen = d.length - 1;
	var num = 0;
function Run () {
	for(var i = 0; i <= alen; i++){
		a[i].style.display="none";
		d[i].style.background='#818181';
	}
	a[num].style.display = 'block';
	d[num].style.background = 'white';
	
	if (num == alen) {
		num = 0;
	}else{
		num++;
	}
}
	Run();
	var time = setInterval(Run, 3000); //设置轮播周期

	var lunbo_k = document.getElementsByClassName('banner_a');
	//鼠标进来事件
	lunbo_k[0].onmouseover = function() {
		clearInterval(time); //清除轮播周期
	};
	//鼠标离开事件
	lunbo_k[0].onmouseleave = function(){
		time = setInterval(Run, 3000); //设置轮播周期
	}


	// 小圆点控制轮播
	
	for (var i = 0; i <= dlen; i++) {
		click_change(i);
	};
	function click_change (i) {
		d[i].onclick = function () {
			num = i;
			Run();
		}
	}



	// 左右按钮控制轮播
	var btn_left = document.getElementsByClassName('btn-left');
	var btn_right = document.getElementsByClassName('btn-right');
	btn_left[0].onclick = function () {
		if ((num-1)==0) {
			num=4;
		} else if(num==0){
			num=3;
		}
		else{
			num=num-2
		};
		Run();
	}
		btn_right[0].onclick = function () {
		Run();
	}


	// 鼠标经过菜单列表
	var co_list_of = document.getElementsByClassName('lift_of');
	var co_list_shop = document.getElementsByClassName('lift-tc');
	var list_len = co_list_of.length -1;

	for (var i = 0; i <= list_len; i++) {
		co_list_of[i].onmouseover = function(num){
			return function(){
				 co_list_shop[num].style.display = 'block';
			}
		}(i);

		co_list_of[i].onmouseout = function(num) {
			return function (){
				 co_list_shop[num].style.display = 'none';
			}
		}(i);
		// show_list(i);
		// hide_list(i);
	};

		function show_list(i) {
			co_list_of[i].onmousemove = function (){
			co_list_shop[i].style.display = 'block';
			}
		}

		function hide_list(i) {
			co_list_of[i].onmouseout = function() {
			co_list_shop[i].style.display = 'none';
		}
	}

	
		// co_list_of[9].onmouseover = function() {
		// co_list_shop[9].style.display = 'block';
		// }
		// co_list_of[9].onmouseout = function() {
		// co_list_shop[9].style.display = 'none';
		// }
}
