define(['jquery', 'KSM_Config', 'jqx'],function($, config)
{	var decorator = 
	{	listControl: {},
		init: function(decorateSelector, theData)
		{	listControl = $(decorateSelector + ':first');
			$(decorateSelector).attr('data-role', 'listmenu');
			listControl
				.jqxListMenu(
				{	theme: 'energyblue',
					enableScrolling: false
				});
			theData.show();

			$(config.defaultContext)
				.on(config.eventTypes.appendRefresh, function(event, newItem)
				{	decorator.appendAndRefresh(newItem);				
				});
			return theData;
		},
		appendAndRefresh: function(newItem)
		{	console.log('appending:', newItem);
			listControl
				.append(newItem)
				.jqxListMenu('refresh');			
		}
	}
	return decorator;	
})