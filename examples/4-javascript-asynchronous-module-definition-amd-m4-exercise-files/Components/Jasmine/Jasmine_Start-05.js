require.config( 
{
    baseUrl: './',
    paths: 
	{
        'jasmine':              	'jasmine-2.4.1/jasmine',
        'jasmine-html':         	'jasmine-2.4.1/jasmine-html',
		'jasmine-boot':				'jasmine-2.4.1/boot',
        'jquery':               	'scripts/jquery',
        'KSM_ToolbarAMD':       	'Components/KSM/KSM_ToolbarAMD',
        'KSM_LanguageAMD':      	'Components/KSM/KSM_LanguageAMD',
		'KSM_FooterAMD':			'Components/KSM/KSM_FooterAMD',
		'KSM_Config':				'Components/KSM/KSM_Config',
		'KSM_ToolbarAMDDefaults': 	'Components/KSM/KSM_ToolbarAMDDefaults',
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
	require(['tests/KSM_Toolbar-05_Spec'], function()
	{	window.onload();
	})
});	
