require.config( 
{
    baseUrl: './',
    paths: 
	{	'jquery':               	'scripts/jquery',
        'toolbar':       			'scripts/KSM_Toolbar',
        'language':      			'scripts/KSM_Language'
    },
	shim:
	{	'toolbar':  { deps: ['jquery'] },
		'language': { deps: ['jquery', 'toolbar'] }
	}
});

require(['language'],function() 
{	_KSM.Language.load('fr');
	_KSM.Toolbar
		.toolbarDiv(
		{	context: '.content',
			buttons: 	
			[	{	type: 'save', title: '=5:Save content (default)' },
				{	type: 'search', title: '=10:Search (default)' },
				{	type: 'publish', title: '=15:Publish (default)' }
			]
		});
	$('.save').addClass('disabled');
	$('ul:first')
		.append(
			$('<li>')
				.text('save button should be disabled'))
});			
