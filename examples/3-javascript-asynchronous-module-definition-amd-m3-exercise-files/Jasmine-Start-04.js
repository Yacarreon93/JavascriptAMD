require(['KSM_ToolbarAMD', 'KSM_LanguageAMD'], function(toolbar, language)
{	
	window._KSM = { Toolbar: toolbar, Language: language };
	
	require(['jquery', 'tests/KSM_Toolbar-04_Spec'], function()
	{	window.onload();
	});
});	