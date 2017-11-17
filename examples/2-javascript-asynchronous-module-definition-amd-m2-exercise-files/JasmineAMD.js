require(['jquery'], function($)
{	var container = $('<div>').addClass('container').hide().appendTo('body');
	container.append('<div class="page">');
	require(['KSM_FooterAMD'], function()
	{	require(['tests/KSM_FooterAMD_Spec'], function()
		{	window.onload();
		});
	});
});