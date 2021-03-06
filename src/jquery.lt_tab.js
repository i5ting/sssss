/**
 * jquery.lt_tab.js
 * jquery plugin
 * 导航菜单，用于切换内容区域，可左右滑动
 * date: 2014-09-25
 * author: kezhi
 */

;(function($){
	/**
	 * set li position
	 * liWidth 计算li宽度百分比
	 */
	function set_li_position(obj,opts){
		var liWidth = parseInt((obj.width() / opts.minItems ) * 100 ) / obj.width();

		$('li',obj).each(function(){
			$(this).css({
				width: liWidth + '%'
			});
		});

	}
 
	/**
	 * 横向
	 */
	function init_h_scroll_view(){
		_h_scroll_view_setting();
		
		var myScroll = new IScroll('#wrapper', {
			scrollX: true,
			scrollY: false,
			momentum: false,
			snap: true,
			snapSpeed: 400,
			keyBindings: true,
			scrollbars: false,
			// indicators: {
		// 			el: document.getElementById('indicator'),
		//   		resize: false
		//   	}
		});
		return myScroll;
	}
	
	function _h_scroll_view_setting(){
			
		var count = $('.slide').length;
		var itemWidth = 100/count;
		
		// alert(count*100)
		$('#scroller').css({'width': count*100 + '%'})
		
		$('.slide').css({'width':itemWidth + '%'})
	}
	
	$.fn.lt_tab = function(options){
		// event prevent
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		
		//将defaults 和 options 参数合并到{}
		var opts = $.extend({},$.fn.lt_tab.defaults,options);

		return this.each(function(index){
		
			init_h_scroll_view();
			for(var i = 0;i < count; i++){
				console.log(i);
			}

		});
		// each end
	};

	/**
	 * 定义默认配置项
	 */
	$.fn.lt_tab.defaults = {
		minItems: 3,
		onItem:0,
		changeMode : 'click',
		callBack: function(){
		}
	};

})(jQuery);
