define(
{	version: '1.0',
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
		footerText: 'Sample web page for Pluralsight course'				
	},
	attachBelow: 'h4',
	eventTypes:
	{	appendRefresh: 	'append-refresh',
		addItem:		'add-item'
	},
	manualAdditionSelector: '.publish'
});