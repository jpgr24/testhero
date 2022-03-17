const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[{path:"replicated/account/logon", element:'#userName',text: 'User name exist'},{path:"replicated/account/logon",element:'#userPassword',text:'User password exist'},{path:"replicated/account/logon",element:'#btnFormSubmit',text:'Submit button exist'}]


describe('My Login application', () => {
    
    
    	  DynamicLoadingPage.exist(test[0]);
    	  DynamicLoadingPage.exist(test[1]);
    	  DynamicLoadingPage.exist(test[2]);
       	  DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", " ", " ",'login', '#dashboardOuterCont')
    
    
});


