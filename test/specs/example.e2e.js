const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

describe('My Login application', () => {
    
    
    	  DynamicLoadingPage.exist("replicated/account/logon",'#userName','User name exist');
    	  DynamicLoadingPage.exist("replicated/account/logon",'#userPassword','User password exist');
    	  DynamicLoadingPage.exist("replicated/account/logon",'#btnFormSubmit','Submit button exist');
        it('a', async () => {
        await DynamicLoadingPage.open("replicated/account/logon");
        
        await DynamicLoadingPage.Click("replicated/account/logon", "#btnFormSubmit");
        await browser.pause(5000)
        
        
    });
    
    
});


