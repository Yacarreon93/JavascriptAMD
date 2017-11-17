require.config( 
{
    baseUrl: './',
    paths: 
	{
        'jquery':               	'scripts/jquery',
        'toolbar':       			'scripts/KSM_Toolbar',
        'language':      			'scripts/KSM_Language'
    },
	shim:
	{
		'toolbar':  
		{ 	deps: ['jquery']
		},
		'language': 
		{ 	deps: ['toolbar'],
			exports: '_KSM.Language'
		}
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
		.append(
			$('<li>')
				.text('argument expectations')
				.append(
				$('<ul>')
					.append(
						$('<li>')
							.text('arguments[0] exists: ' + !!(arguments[0])))
					.append(
						$('<li>')
							.text('arguments length: ' + arguments.length))
					.append(
						$('<li>')
							.text('arguments[0] has Toolbar: ' + !!(arguments[0].Toolbar)))
					.append(
						$('<li>')
							.text('arguments[0] has Language: ' + !!(arguments[0].Language)))
					.append(
						$('<li>')
							.text('arguments[0] is Language: ' + !!(arguments[0].load)))
				)
		)
});			
