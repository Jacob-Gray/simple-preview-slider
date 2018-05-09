(function () {

	/**
	 * Select elements
	 */
	var $el = document.querySelector('.filter-preview'),
		$wrapper = $el.querySelector('.image-wrapper'),
		$slider = $wrapper.querySelector('.filter-slider');

	/**
	 * Initialize global vars
	 */
	var dragging = false,
		startX;

	function w(el) {
		return parseInt(getComputedStyle(el).width);
	}

	/**
	 * Make sure the two element backgrounds overlap perfectly
	 */
	function positionWrapperBackground() {
		$wrapper.style.backgroundSize = 'auto ' + w($el) + 'px';
	}

	window.addEventListener('resize', positionWrapperBackground);
	positionWrapperBackground();

	/**
	 * Handle resize
	 */
	$el.addEventListener('mousemove', function (event) {

		if (dragging) {

			var displayWidth = w($el),
				newWidth = w($wrapper) - (startX - event.pageX);

			if (newWidth > 50 && displayWidth - newWidth > 50) {
				$wrapper.style.width = newWidth + 'px';
				startX = event.pageX;

			}
		}
	});

	$slider.addEventListener('mousedown', function (event) {

		dragging = true;
		startX = event.pageX;
	});

	window.addEventListener('mouseup', function () {

		dragging = false;
	});
})();