/*  KSM_FooterAMD.js
*/
define(['jquery', 'KSM_Config'], function($, config)
{	var footer = 
	{	wrapperTag: '<p>',
		footerClass: 'footer',
		insertAfter: '.page',
		footerText: 'Sample web page for Pluralsight course - default',
		
		init: function(options)
		{	if (typeof options === 'string')
				options = { footerText: options };
			if (typeof options !== 'object')
				options = {};
			if (!!config)
				options = $.extend(true, {}, config.footerOptions || {}, options);
			$.extend(true, footer, options);
			$('.' + footer.footerClass).remove();
			$(footer.wrapperTag)
				.addClass(footer.footerClass)
				.html(footer.footerText)
					.insertAfter(footer.insertAfter);
		}
	}
	footer.init();
	return footer;
});