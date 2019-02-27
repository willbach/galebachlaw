(function() {

	var docElem = document.documentElement,
		header = $('.headings-header'),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		scrollPage();
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
      header.addClass("active");
		}
		else {
      header.removeClass("active");
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

  $('body').scrollspy({ target: '.headings-header' });
})();
