require.config( 
{
    baseUrl: './',
    paths: 
	{
        'jquery':               	'scripts/jquery',
        'KSM_ToolbarAMD':       	'Components/KSM/KSM_ToolbarAMD',
        'KSM_LanguageAMD':      	'Components/KSM/KSM_LanguageAMD',
		'footer':					'Components/NEW/NEW_FooterAMD',
		'KSM_Config':				'Components/KSM/KSM_Config',
		'KSM_ToolbarAMDDefaults': 	'Components/KSM/KSM_ToolbarAMDDefaults',
		'JasmineAMD':				'Components/Jasmine/JasmineAMD'
    },
});

require(['KSM_Config', 'KSM_ToolbarAMD', 'KSM_LanguageAMD'],
function( config,       toolbar,          language) 
{	require(['footer']);
		
	language.load(config.languageAbbr);
	toolbar
		.toolbarDiv(
		{	context: config.defaultContext,
			buttons: config.toolbarButtons,
			autoAttach: true
		});
});			
