(function( $ ) {
    $.fn.button = function( action ) {
        if ( action === "loading") {
			var loadingText = '<i class="fa fa-circle-o-notch fa-spin"></i> loading...';
		    if ($(this).html() !== loadingText) {
		      $(this).data('original-text', $(this).html());
		      $(this).html(loadingText).prop("disabled",true);
		    }
        }
        if ( action === "reset" ) {
            $(this).html($(this).data('original-text')).prop("disabled",false);
        }
    };
}( jQuery ));