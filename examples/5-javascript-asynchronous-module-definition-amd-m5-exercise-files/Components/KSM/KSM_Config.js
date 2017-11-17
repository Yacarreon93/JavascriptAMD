define(
{	version: '1.1',
	defaultContext: '.content',
	languageAbbr: 'fr',
	toolbarButtons:
	[	{	type: 'save', title: '=5:Save content (default)' },
		{	type: 'search', title: '=10:Search (default)' },
		{	type: 'publish', title: '=15:Publish (default)' }
	],
	listTag: 'ul',
	footerOptions:
	{	wrapperTag: '<p>',
		footerClass: 'footer',
		insertAfter: '.page',
		footerText: 'Sample web page for Pluralsight course from config'				
	}
});