require(['jquery', 'KSM_ToolbarAMD', 'KSM_LanguageAMD', 'KSM_FooterAMD'], function($, toolbar, language)
{	language.load('fr');
	toolbar.toolbarDiv(
	{	context: '.content',
		buttons:
		[	{	type: 'save', title: '=5:Save content (default)' },
			{	type: 'search', title: '=10:Search (default)' },
			{	type: 'publish', title: '=15:Publish (default)' }
		]
	});
});			