require(['KSM_ToolbarAMD', 'KSM_LanguageAMD'], function(toolbar, language)
{	
	window._KSM = { Toolbar: toolbar, Language: language };
	var tmpDiv = $('<div>');
	require(['jquery', 'tests/KSM_ToolbarAMD_Spec'], function()
	{	window.onload();
	})

});