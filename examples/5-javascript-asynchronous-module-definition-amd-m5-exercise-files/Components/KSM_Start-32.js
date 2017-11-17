require.config( 
{	baseUrl: './',
    paths: 
	{
        'jquery':               	'scripts/jquery',
		'jqx':						'scripts/jqWidgets/jqx-all',
		
		//'KSM_UI':					'Components/KSM/UI/KSM_UI',
		'KSM_UI':					'Components/KSM/UI/KSM_UI_Save',
		'KSM_FooterAMD':			'Components/KSM/UI/KSM_FooterAMD',
        'KSM_UI_Decorations':		'Components/KSM/UI/KSM_UI_Decorations',
		'KSM_Listeners':			'Components/KSM/UI/KSM_Listeners',
		
		'KSM_ToolbarLoader':		'Components/KSM/Toolbar/KSM_ToolbarLoader',
		'KSM_ToolbarAMD':       	'Components/KSM/Toolbar/KSM_ToolbarAMD',
        'KSM_ToolbarAMDDefaults': 	'Components/KSM/Toolbar/KSM_ToolbarAMDDefaults',
		
		'KSM_LanguageLoader':		'Components/KSM/Language/KSM_LanguageLoader',
		'KSM_LanguageAMD':      	'Components/KSM/Language/KSM_LanguageAMD',
		
		'KSM_DataLoader':			'Components/KSM/Data/KSM_DataLoader',
        'KSM_DataProxy':			'Components/KSM/Data/KSM_DataProxy',
		
		'KSM_Config':				'Components/KSM/Config/KSM_Config'
    }
});

require([],function()
{	require(['KSM_UI']);
});	