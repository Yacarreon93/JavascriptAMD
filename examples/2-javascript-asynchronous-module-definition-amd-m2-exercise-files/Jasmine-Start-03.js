require(['KSM_ToolbarAMD', 'KSM_LanguageAMD'], function(toolbar, language)
{	window._KSM = { Toolbar: toolbar, Language: language };
	require(['tests/KSM_ToolbarAMD_Spec'], function()
	{	window.onload();
	})
});