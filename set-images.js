(function () {

	/**
	 * Select elements
	 */
	var $el = document.querySelector('.filter-preview'),
		$wrapper = $el.querySelector('.image-wrapper');

	/**
	 * Parse location for image urls
	 */
	var loc = document.location.search.indexOf('='),
		imgs = document.location.search.substr(++loc).split('|');

	$el.style.backgroundImage = 'url(' + imgs[0] + ')';
	$wrapper.style.backgroundImage = 'url(' + imgs[1] + ')';
})();