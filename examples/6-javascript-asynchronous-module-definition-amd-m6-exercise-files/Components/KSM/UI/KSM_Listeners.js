define(['jquery', 'KSM_Config'],function($, config)
{	var init = function(options)
	{	options = $.extend(true, options, 
		{	toolbarButton: config.manualAdditionSelector
		});
		$(options.toolbarButton).one('click', function()
		{	$(this).addClass('disabled');
			$(config.defaultContext).trigger(config.eventTypes.addItem);
		});
	}
	return init;
})