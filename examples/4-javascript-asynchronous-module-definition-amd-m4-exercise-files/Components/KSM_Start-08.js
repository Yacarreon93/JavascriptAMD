require(['KSM_Config', 'KSM_ToolbarAMD', 'KSM_LanguageAMD'],
function( config,       toolbar,          language) 
{	require(['KSM_FooterAMD']);
		
	language.load(config.languageAbbr);
	toolbar
		.toolbarDiv(
		{	context: config.defaultContext,
			buttons: config.toolbarButtons,
			autoAttach: true
		});
});			
