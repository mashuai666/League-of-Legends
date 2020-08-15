function animate(obj, target, callback) {
	// console.log(callback);   callback=function(){}
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		//缓动值应该写进定时器里
		//缓动值改为整数，不要出现小数问题
		// var step = Math.ceil((target - obj.offsetLeft) / 10);
		var step = (target - obj.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		if (obj.offsetLeft == target) {
			clearInterval(obj.timer)
			//回调函数写到定时器结束
			// if (callback) {
			// 	//调用函数
			// 	callback();
			// }
			callback && callback();
		} else {
			//把固定值改为缓动值
			obj.style.left = obj.offsetLeft + step + 'px';
		}
	}, 30)
}
