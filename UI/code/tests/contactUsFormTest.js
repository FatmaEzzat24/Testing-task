

describe("Contact us test", function(){
    const homePage = browser.page.contactUsPage();
    browser.globals.abortOnAssertionFailure = false;
    it("All fields filled out test",function(browser){
        browser.url(browser.baseUrl);
        browser.pause(2000);
        homePage.click('@contactUs');
        homePage.setValue('@subjectHeading',"Customer service");
        browser.pause(1000);
        homePage.setValue('@emailAddress',"fatma@gmail.com");
        browser.pause(1000);
        homePage.setValue('@orderReference',"1");
        browser.pause(1000);
        homePage.setValue('@attachFile',require('path').resolve(__dirname + '/order.pdf'));
        browser.pause(1000);
        homePage.setValue('@message',"test");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@alertMsg').text.toContain('Your message has been successfully sent to our team.');
        browser.pause(2000);

    });
    it("Empty Subject heading field test",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@emailAddress',"fatma@gmail.com");
        browser.pause(1000);
        homePage.setValue('@orderReference',"1");
        browser.pause(1000);
        homePage.setValue('@attachFile',require('path').resolve(__dirname + '/order.pdf'));
        browser.pause(1000);
        homePage.setValue('@message',"test");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Please select a subject from the list provided.');
        browser.pause(2000);
    });
    it("Empty Email field test",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@subjectHeading',"Customer service");
        browser.pause(1000);
        homePage.setValue('@orderReference',"1");
        browser.pause(1000);
        homePage.setValue('@attachFile',require('path').resolve(__dirname + '/order.pdf'));
        browser.pause(1000);
        homePage.setValue('@message',"test");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
       // homePage.assert.textContains('@errorMsg','Please enter your email address.');
        homePage.expect.element('@errorMsg').text.toContain('Please enter your email address.');
        browser.pause(2000);
    });
    it("Empty Order reference field test",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@subjectHeading',"Customer service");
        browser.pause(1000);
        homePage.setValue('@emailAddress',"fatma@gmail.com");
        browser.pause(1000);
        homePage.setValue('@attachFile',require('path').resolve(__dirname + '/order.pdf'));
        browser.pause(1000);
        homePage.setValue('@message',"test");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@alertMsg').text.toContain('Your message has been successfully sent to our team.');
        browser.pause(2000);
    });
    it("Empty Message field test",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@subjectHeading',"Customer service");
        browser.pause(1000);
        homePage.setValue('@emailAddress',"fatma@gmail.com");
        browser.pause(1000);
        homePage.setValue('@attachFile',require('path').resolve(__dirname + '/order.pdf'));
        browser.pause(1000);
        homePage.setValue('@orderReference',"1");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('The message cannot be blank.');
        browser.pause(2000);
    });
    it("Empty Attach file field test",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@subjectHeading',"Customer service");
        browser.pause(1000);
        homePage.setValue('@emailAddress',"fatma@gmail.com");
        browser.pause(1000);
        homePage.setValue('@message',"test");
        browser.pause(1000);
        homePage.setValue('@orderReference',"1");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@alertMsg').text.toContain('Your message has been successfully sent to our team.');
        browser.pause(2000);
    });

    it("Specific error message test",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@orderReference',"1");
        browser.pause(1000);
        homePage.setValue('@attachFile',require('path').resolve(__dirname + '/order.pdf'));
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Please select the subject, enter your email and enter your message.');
        browser.pause(2000);
    });
    it("Filled Subject heading field only",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@subjectHeading',"Customer service");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Please enter your email and your message.');
        browser.pause(2000);
    });
    it("Filled Email field only",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@emailAddress',"fatma@gmail.com");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Please select the subject and enter your message.');
        browser.pause(2000);
    });
    it("Filled message field only",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@message',"test");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Please select the subject and enter your email.');
        browser.pause(2000);
    });
    it("Filled order reference field only",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@orderReference',"1");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Please select the subject, enter your email and enter your message.');
        browser.pause(2000);
    });
    it("Filled Attach file field only",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@attachFile',require('path').resolve(__dirname + '/order.pdf'));
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Please select the subject, enter your email and enter your message.');
        browser.pause(2000);
    });
    it("Empty fields test",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Please enter all required fields.');
        browser.pause(2000);
    });
    it("Validate email format",function(browser){
        homePage.click('@contactUs');
        browser.pause(1000);
        homePage.setValue('@subjectHeading',"Customer service");
        browser.pause(1000);
        homePage.setValue('@emailAddress',"fatma@");
        browser.pause(1000);
        homePage.setValue('@orderReference',"1");
        browser.pause(1000);
        homePage.setValue('@attachFile',require('path').resolve(__dirname + '/order.pdf'));
        browser.pause(1000);
        homePage.setValue('@message',"test");
        browser.pause(1000);
        homePage.click('@send');
        browser.pause(1000);
        homePage.expect.element('@errorMsg').text.toContain('Invalid email address.');
        browser.pause(2000);

    });
    it("Search bar test", function(browser){
        homePage.click('@home');
        browser.pause(2000);
        homePage.setValue('@search',"dress");
        browser.pause(1000);
        for(i = 0; i < 7;i++)
            homePage.nextItem();
        
    });



});