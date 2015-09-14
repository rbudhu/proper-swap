/* 
Author: R. Budhu
Swaps source and target HTML elements visually and in the DOM.
*/
(function ($) {
    $.fn.swap = function($target, options, callback) {
	var self = this;
	self.options = $.extend({
		duration: 600
	    }, options);
	var source_top = self.offset().top;
	var target_top = $target.offset().top;
	var target_distance = source_top - target_top;
	var source_distance = target_top - source_top;
	$.when(self.animate({
		   top: source_distance + 'px'
			}, self.options.duration),
	    $target.animate({
		    top: target_distance + 'px'
			}, self.options.duration)).done(function() {
				var $sclone = self.clone(true);
				var $tclone = $target.clone(true);
				$sclone.css('top', '0px');
				$tclone.css('top', '0px');
				$sclone.insertBefore($target);
				$tclone.insertBefore(self);
				self.remove();
				$target.remove();
				if(typeof callback === 'function')
				    callback.call();
			    });// end done
	return this;
    }// end swap
}(jQuery));// end function