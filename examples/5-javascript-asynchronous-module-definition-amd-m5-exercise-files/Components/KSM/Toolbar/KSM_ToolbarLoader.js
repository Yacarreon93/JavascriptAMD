define(['KSM_Config', 		'KSM_ToolbarAMD', 'KSM_LanguageAMD'],
function(config,       		toolbar, 		   language)
{	toolbar
		.toolbarDiv(
		{	context: config.defaultContext,
			buttons: config.toolbarButtons
		});
});