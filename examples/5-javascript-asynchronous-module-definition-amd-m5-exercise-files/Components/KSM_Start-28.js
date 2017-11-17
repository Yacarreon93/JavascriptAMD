require.config( 
{
    baseUrl: './',
    paths: 
	{
        'jquery':               	'scripts/jquery',
        'KSM_ToolbarAMD':       	'Components/KSM/KSM_ToolbarAMD',
        'KSM_LanguageAMD':      	'Components/KSM/KSM_LanguageAMD',
		'KSM_FooterAMD':			'Components/KSM/KSM_FooterAMD',
        'KSM_Config':				'Components/KSM/KSM_Config',
		'KSM_ToolbarAMDDefaults': 	'Components/KSM/KSM_ToolbarAMDDefaults',
		'KSM_DataProxy':			'Components/KSM/KSM_DataProxy',
		'jqx':						'jQWidgets/jqx-all'
    }
});

require(['KSM_Config', 		'KSM_ToolbarAMD', 'KSM_LanguageAMD', 'KSM_DataProxy'], 
function(config,       		toolbar, 		   language,		  data)
{	//require(['KSM_FooterAMD'], function(footer)
	//{	footer.init('Footer for Pluralsight course provided by code');
	//});
	require(['KSM_FooterAMD']);

	language.load(config.languageAbbr);
	toolbar
		.toolbarDiv(
		{	context: config.defaultContext,
			buttons: config.toolbarButtons
		});
		
	var theData = data.loadAsObject().hide();
	$('h4').parent().append(theData);
	$('ul:first').append('<li>Using legacy footer pattern</li>');
	$('ul:first').append('<li>Footer also calls init function</li>');
		
	require(['jqx'], function()
	{	$('ul').attr('data-role', 'listmenu');
		$('ul:first')
			.jqxListMenu(
			{	theme: 'energyblue',
				enableScrolling: false
			});
		theData.show();
	});
	
	$('.publish').one('click', function()
	{	var newItem = $(data.loadOneItem());
		$(config.defaultContext).trigger('data-added', newItem);
	});
	
	$(config.defaultContext).on('data-added', function(event, newItem)
	{	$('ul:first')
			.append(newItem)
			.jqxListMenu('refresh');
	});	
});		
