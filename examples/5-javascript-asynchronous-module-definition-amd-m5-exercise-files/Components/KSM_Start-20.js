require.config( 
{
    baseUrl: './',
    paths: 
	{
        'jquery':               	'scripts/jquery',
        'KSM_ToolbarAMD':       	'Components/KSM/KSM_ToolbarAMD',
        'KSM_LanguageAMD':      	'Components/KSM/KSM_LanguageAMD',
		'KSM_FooterAMD':			'Components/KSM/KSM_FooterAMD',
        'KSM_Config':				'Components/KSM/KSM_Config',
		'KSM_ToolbarAMDDefaults': 	'Components/KSM/KSM_ToolbarAMDDefaults',
		'jqx':						'jQWidgets/jqx-all'
    }
});

require(['KSM_Config', 'KSM_ToolbarAMD', 'KSM_LanguageAMD'],
function(config, toolbar, language) 
{	require(['KSM_FooterAMD']);
	language.load(config.languageAbbr);
	toolbar
		.toolbarDiv(
		{	context: config.defaultContext,
			buttons: config.toolbarButtons
		});
		
	require(['jqx'], function()
	{	$('ul').attr('data-role', 'listmenu');
		$('ul:first')
			.jqxListMenu(
			{	theme: 'energyblue',
				enableScrolling: false
			})
			.removeClass('hidden');
	});
});			
