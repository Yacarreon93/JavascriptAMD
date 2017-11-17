/*  KSM_DataProxy.js
*/
define(['jquery'], function()
{	var KSM_Data = {};

	$.extend(true, KSM_Data,
	{	defaultData:
		[	// This data approximates records from a web service call
			{	title: 'RequireJS Optimizer: http://requirejs.org/optimization.html'				
			},
			{	title: 'RequireJS, which loads',
				children:
				[
					{	title: 'jQuery' },
					{	title: 'AMD modules',
						children:
						[
							{	title: 'AMD toolbar library' },
							{	title: 'AMD language translation library' },
							{	title: 'AMD footer module' },
							{	title: 'AMD configuration module' }
						]
					},
					{	title: 'jqWidgets',
						children:
						[
							{	title: 'Loaded within script' },
							{	title: 'Decorates list as menu' }
						]
					},
					{	title: 'Dynamic data loaded via proxy object' },
				]
			}
		],
		
		load: function(options)
		{	return KSM_Data.defaultData;			
		},
		loadAsObject: function(options)
		{	// Make sure we have an options object populated with a structure indicator
			options = options || { structure: 'ul' };
			var workingObject = $('<div>'),
				// Create an internal jQuery object of the right type 
				currentLevel = options.structure === 'ul' ? $('<ul>') : $('<div>'),
				// Get the default data
				theData = KSM_Data.load(),
				// Define an internal function to be called recursively
				appendLine = function(dataLine)
				{	var workingLineObject, 
						// A parent has an embedded container for children
						dataLineType = dataLine.children ? 'p' : 'c',
						dataTitle = dataLine.title,
						childObject;
					
					// Create the appropriate child container 
					if (options.structure === 'ul')
							workingLineObject = $('<li>');
						else 
							workingLineObject = $('<div>');
					
					// Add title if present
					if (dataTitle)
						workingLineObject.text(dataTitle);
					
					// Append what we just built 
					currentLevel.append(workingLineObject);

					// Parent objects require extra processing
					if (dataLineType === 'p')
					{	childObject = options.structure === 'ul' ? $('<ul>') 
																 : $('<div>');
						// Append the container for the children
						workingLineObject.append(childObject);
						
						// Adjust the pointer for current level to new container
						currentLevel = childObject;
						
						// Call appendLine (recursion) for each child
						$.each(dataLine.children, function()
						{	var childDataLine = this;
							appendLine(childDataLine);							
							// Restore current level to previous child container 
							// since recursion may have moved the pointer deeper
							// into the nested levels
							currentLevel = childObject;
						});
						
					}
				};
			// Start appending the data lines and return when done
			workingObject.append(currentLevel);
			$.each(theData, function()
			{	appendLine(this);
			});
			return workingObject;
		},
		
		loadAsHtml: function(options)
		{	return KSM_Data.loadAsObject().html();
		},
		
		loadOneItem: function(options)
		{	return ('<li>Single item from data proxy<li>');			
		}
	});
	return KSM_Data;	
});