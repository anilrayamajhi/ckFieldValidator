

/* global CKEDITOR */
(function() {
	'use strict';

	CKEDITOR.plugins.add( 'ckFieldValidator', {
		init : function( editor ) {

			editor.on( 'required', function( evt ) {
				var $container = $(evt.editor.container.$);

				if(!$container.siblings('label.control-label').find('small').length) {
					$container.siblings('label.control-label').append('&nbsp;&nbsp;&nbsp;&nbsp;<small style="color:#FF0000;">Required Field</small>')
				}
				evt.cancel();
			} );

		}
	} );

})();