require(['KSM_Config', 'KSM_ToolbarAMD', 'KSM_LanguageAMD', 'KSM_FooterAMD'], 
function(config, 	   toolbar, 		 language)          // footer not referenced
{	language.load(config.languageAbbr);
	toolbar.toolbarDiv(
	{	context: config.defaultContext,
		buttons: config.toolbarButtons
	});
});