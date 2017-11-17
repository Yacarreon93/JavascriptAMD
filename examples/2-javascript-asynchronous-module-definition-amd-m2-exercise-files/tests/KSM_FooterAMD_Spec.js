describe('The KSM Footer Module', function()
{	var expectedText = 'Sample web page for Pluralsight course',
		footerDiv = $('.footer');
		
	it('should be appended to a DIV class of "page"', function()
	{	expect(footerDiv).toBeDefined();
		expect(footerDiv.length).toEqual(1);
	});
    it('should have the expected text', function()
    {   expect(footerDiv.html()).toEqual(expectedText);
    });	
});
