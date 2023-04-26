import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

//SELEKTORY 
        const emailField = await $('#email');
        console.log(await emailField.getHTML()); //vypíše HTML
        console.log(await emailField.getText()); //vypíše text
        
// CVIČENÍ SELEKTORY
        //podle tagu
        const formTag = await $('form');
        console.log(await formTag.getHTML());
        
        const inputTag = await $('input');
        console.log(await inputTag.getHTML());

        const buttonTag = await $('button');
        console.log(await buttonTag.getHTML());

        //podle id
        const emailFieldId = await $('#email');
        console.log(await emailFieldId.getHTML());
      
        const passwordField = await $('#password');
        console.log(await passwordField.getHTML());

        //podle třídy
        const loginBtn = await $('.btn-primary');
        console.log(await loginBtn.getHTML());
        
        const emailFieldName = await $('[name="email"]');
        console.log(await emailFieldName.getHTML());

        //podle atributu

        const passwordFieldAtr = await $('[type="email"]');
        console.log(await passwordFieldAtr.getHTML());
        
        const atributAss = await $('[type*="ass"]');
        console.log(await atributAss.getHTML());
        
        const atributWord = await $('[type$="word"]');
        console.log(await atributWord.getHTML());
        
        const atributPass = await $('[type^="pass"]');
        console.log(await atributPass.getHTML());

        //kombinace

        









        
    
// KONEC CVIČENÍ SELEKTORY

        const windowSize= await browser.getWindowSize();

        console.log(windowSize);

        await browser.saveScreenshot('login_page.png');
        
        await browser.pause(5000);

    });

});
