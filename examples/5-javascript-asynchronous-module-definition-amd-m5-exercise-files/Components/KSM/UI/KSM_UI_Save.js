define(['jquery', 'KSM_Config'],function($, config)
{	require(['KSM_FooterAMD'], function(footer)
	{	footer.init('Footer for final Pluralsight project sample');
	});	
	require(['KSM_ToolbarLoader']);
	require(['KSM_LanguageLoader']);	
	require(['KSM_DataLoader'], function(dataLoader)
	{	var theData = dataLoader.init(config.attachBelow);
		require(['KSM_UI_Decorations'], function(decorator)
		{	decorator.init(config.listTag, theData);

			$('.save').one('click', function()
			{	decorator.appendAndRefresh('<li>Save button clicked</li>');
			});
		});
		require(['KSM_Listeners'], function(listen_init)
		{	listen_init(config.defaultContext);
		});
	});
})