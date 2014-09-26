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
 

	$.fn.lt_tab = function(options){

		//将defaults 和 options 参数合并到{}
		var opts = $.extend({},$.fn.lt_tab.defaults,options);

		/**
		 * obj对象为当前调用该插件方法的对象。
		 * 而后面bind里面的clickIndex = $(".tab li", obj).index($(this));
		 * 意思就是obj对象下面的ul中的li元素索引index($(this))
		 * 这里的$(this)则是在li元素中找到当前li元素的索引。
		 */
		return this.each(function(index){
			 
			add_iscroll(obj,objCon,opts);
		});
		// each end
	};

	/**
	 * 定义默认配置项
	 * minItems: li列的个数
	 * onItem: 定义默认选中项
	 */
	$.fn.lt_tab.defaults = {
		minItems: 3,
		onItem:0,
		changeMode : 'click',
		callBack: function(){
		}
	};

})(jQuery);
