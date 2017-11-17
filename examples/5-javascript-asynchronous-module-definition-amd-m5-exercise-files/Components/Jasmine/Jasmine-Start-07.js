require.config( 
{
    baseUrl: './',
    paths: 
	{
        'jquery':               	'scripts/jquery',
		
		'KSM_ToolbarLoader':		'Components/KSM/KSM_ToolbarLoader',
		'KSM_ToolbarAMD':       	'Components/KSM/KSM_ToolbarAMD',
        'KSM_ToolbarAMDDefaults': 	'Components/KSM/KSM_ToolbarAMDDefaults',
		
		'KSM_LanguageLoader':		'Components/KSM/KSM_LanguageLoader',
		'KSM_LanguageAMD':      	'Components/KSM/KSM_LanguageAMD',
		
		'KSM_Config':				'Components/KSM/KSM_Config',
        
		'jasmine':              	'jasmine-2.4.1/jasmine',
        'jasmine-html':         	'jasmine-2.4.1/jasmine-html',
		'jasmine-boot':				'jasmine-2.4.1/boot'
    },
    shim: 
	{
        'jasmine-html': { deps: ['jasmine'] },
		'jasmine-boot': { deps: ['jasmine-html'] }
    }
});

require(['KSM_ToolbarAMD', 'KSM_LanguageAMD', 'jasmine-boot'], 
function(toolbar, language)
{	window._KSM = { Toolbar: toolbar, Language: language };
	require(['tests/KSM_Test_Spec', 
			 'tests/KSM_ToolbarAMD_Spec'], 
		function()
		{	window.onload();
		});
});	
