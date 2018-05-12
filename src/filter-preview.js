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
		direction,
		prevX,
		startingOffset = 0;

	function w(el) {
		return parseInt(getComputedStyle(el).width);
	}

	/**
	 * Handle resize
	 */
	window.addEventListener('mousemove', function (event) {

		if (dragging) {

			var displayWidth = w($el),
				travelled = prevX - event.pageX;

			if (prevX > event.pageX) {

				if (startingOffset < 0 && startingOffset < travelled) startingOffset = startingOffset + travelled;
				else startingOffset = 0;

				direction = 'left';
			} else if (prevX < event.pageX) {

				if (startingOffset > 0 && startingOffset > travelled) startingOffset = startingOffset + travelled;
				else startingOffset = 0;

				direction = 'right';
			}

			var currentX = event.pageX + startingOffset;

			if (currentX <= 2) {

				$slider.classList.add('grow-right');
				$wrapper.style.width = '2px';
			} else if (displayWidth - currentX <= 2) {

				$slider.classList.add('grow-left');
				$wrapper.style.width = displayWidth - 2 + 'px';
			} else {

				$slider.className = 'filter-slider'

				$wrapper.style.width = (currentX / displayWidth) * 100 + '%';
			}

			prevX = event.pageX;
		}
	});

	$slider.addEventListener('mousedown', function (event) {

		dragging = true;
		startingOffset = w($wrapper) - event.pageX;
		prevX = event.pageX;
	});

	window.addEventListener('mouseup', function () {

		dragging = false;
	});

	document.addEventListener('mouseout', function (event) {

		if (dragging && !event.toElement && !event.relatedTarget) {

			var displayWidth = w($el);

			if (direction === 'left') {

				$slider.classList.add('grow-right');
				$wrapper.style.width = '2px';
			}

			if (direction === 'right') {

				$slider.classList.add('grow-left');
				$wrapper.style.width = displayWidth - 2 + 'px';
			}
		}
	});
})();