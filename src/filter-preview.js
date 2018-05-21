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
	function sliderMove (event) {

		event.preventDefault();

		// Only process anything if the user is dragging the slider
		if (dragging) {

			var displayWidth = w($el),
				wrapperWidth = w($wrapper),
				x = event.targetTouches ? event.targetTouches[0].pageX : event.pageX,
				travelled = prevX - x;

			// Check the direction of the drag by comparing the previous and current positions
			// The main purpose of this code is to provide a smooth transition so the slider is centered on the cursor, without a sudden jump
			if (prevX > x) {

				// Note that here the starting offset and travelled are negative
				// If we have a < 0 starting offset, and the starting offset is less than the traveled distance, we just subtract the travelled difference from the offset
				if (startingOffset < 0 && startingOffset < travelled) startingOffset = startingOffset + travelled;

				// Otherwise, if the travelled distance is more than the starting offset, meaning the cursor has passed over(or is currently over) the center point,
				// we remove the offset.
				else if (travelled > startingOffset) startingOffset = 0;

				direction = 'left';
			} else if (prevX < x) {

				// Same as above except reversed and the starting offset and travelled are positive
				if (startingOffset > 0 && startingOffset > travelled) startingOffset = startingOffset + travelled;
				else if (travelled < startingOffset) startingOffset = 0;

				direction = 'right';
			}

			// Calculate the current width for the image wrapper
			var currentX = x + startingOffset;

			// Check if the user is within a margin of the windows edge.
			// This allows us to add the appropriate styles when a image is covering the whole display.
			if (currentX <= 2) {

				$slider.classList.add('grow-right');
				$wrapper.style.width = '2px';
			} else if (displayWidth - currentX <= 2) {

				$slider.classList.add('grow-left');
				$wrapper.style.width = displayWidth - 2 + 'px';
			} else {

				// Remove all classes
				$slider.className = 'filter-slider'

				// Set the width in percentages, so we don't need to worry about changing this on window resize
				$wrapper.style.width = (currentX / displayWidth) * 100 + '%';
			}

			prevX = x;
		}
	};

	function start (event) {

		// Set dragging variable and style
		dragging = true;
		$el.classList.add('dragging');

		// Set intial position information
		var x = event.targetTouches ? event.targetTouches[0].pageX : event.pageX;
		startingOffset = w($wrapper) - x;
		prevX = x;
	};

	function end () {

		// Set dragging to false and remove dragging style
		dragging = false;
		$el.classList.remove('dragging');
	};

	// The purpose of checking this event is to provide as smooth a UX as possible, regardless of if the mouse moves out of the iframe and into area's we have no access to.
	document.addEventListener('mouseout', function (event) {

		// Check if we are dragging, and that the mouse actually left the window
		if (dragging && !event.toElement && !event.relatedTarget) {

			// Check the direction the user was travelling in, and set the slider to the farthest possible position in that direction
			// We do this because mousemove is not triggered on every pixel, and when you are moving quickly it's possible to move out of the iframe, but the slider
			// will only be partially across.
			if (direction === 'left') {

				$slider.classList.add('grow-right');
				$wrapper.style.width = '2px';
			} else if (direction === 'right') {

				$slider.classList.add('grow-left');
				$wrapper.style.width = w($el) - 2 + 'px';
			}
		}
	});

	/**
	 * Attach mobile and desktop events
	 */
	window.addEventListener('mousemove', sliderMove);
	window.addEventListener('touchmove', sliderMove);

	$slider.addEventListener('mousedown', start);
	$slider.addEventListener('touchstart', start);

	window.addEventListener('mouseup', end);
	window.addEventListener('touchend', end);
})();
