define(['jquery', 'KSM_Config', 'KSM_DataProxy'],function($, config, data)
{	var dataProxy =
	{	listControl: {},
		init: function(appendToTag)
		{	var theData = data.loadAsObject().hide();
			
			dataProxy.listControl = $(appendToTag);
			dataProxy.listControl
				.parent()
					.append(theData);
			
			dataProxy.singleItemListener();
			return theData;
		},
		
		singleItemListener: function()
		{	$(config.defaultContext)
				.on(config.eventTypes.addItem, function()
				{	var newItem = data.loadOneItem();
					$(config.defaultContext)
						.trigger(config.eventTypes.appendRefresh, newItem);
				})
		},
	}
	return dataProxy;
})