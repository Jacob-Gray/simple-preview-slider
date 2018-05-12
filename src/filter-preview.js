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
        currentWidth,
        startX;

    function w(el) {
        return parseInt(getComputedStyle(el).width);
    }

	/**
	 * Make sure the two element backgrounds overlap perfectly
	 */
    function positionWrapperBackground() {
        $wrapper.style.backgroundSize = w($el) + 'px';
    }

    window.addEventListener('resize', positionWrapperBackground);
    positionWrapperBackground();

	/**
	 * Handle resize
	 */
    window.addEventListener('mousemove', function (event) {

        if (dragging) {

            var displayWidth = w($el);

            currentWidth = w($wrapper) - (startX - event.pageX);

            if (currentWidth <= 2) {

                $slider.classList.add('grow-right');
            } else if (displayWidth - currentWidth <= 2) {

                $slider.classList.add('grow-left');
            } else {

                $slider.className = 'filter-slider'

                $wrapper.style.width = (currentWidth / displayWidth) * 100 + '%';
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

    window.addEventListener('mouseout', function () {

        if(dragging) {

            var displayWidth = w($el);

            if(currentWidth < 40) {

                $slider.classList.add('grow-right');
                $wrapper.style.width = '3px';
            }

            if(displayWidth - currentWidth <= 40) {

                $slider.classList.add('grow-left');
                $wrapper.style.width = displayWidth - 3 + 'px';
            }
        }

        console.log('mouse left');
    });
})();