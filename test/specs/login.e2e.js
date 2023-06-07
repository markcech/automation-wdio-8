import { username, password } from './fixtures.js'

async function getEmailField(){
    return await $('#email');
};

async function getPasswordField(){
    return await $('#password');
};

async function button(){
    return await $('.btn-primary');
};

async function getUserName(){
    return await $('.dropdown-toggle').$('strong');
};

describe("4.1- Přihlašování", async () => {

    beforeEach(async()=> {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    it("4.1.1 - Přihlášení bez údajů", async () => {
    
        const emailField = await getEmailField();
        console.log('Email field is displayed: ' + await emailField.isDisplayed());
        console.log('Email field is enabled: ' + await emailField.isEnabled());

        const passwordField = await getPasswordField ();
        console.log('Password field is displayed: ' + await passwordField.isDisplayed());
        console.log('Password field is enabled: ' + await passwordField.isEnabled());

        const submitButton = await button();
        console.log('Submit button is displayed: ' + await submitButton.isDisplayed());
        console.log('Submit button is enabled: ' + await submitButton.isEnabled());

        await submitButton.click();
        const currentPage = $('h1');
        console.log("Titulek stránky je: " + await currentPage.getText());


        await browser.pause(2000);
    });

    it("4.1.2 - Nesprávné heslo", async () => {
    
        const emailField = await getEmailField();
        await emailField.setValue(username);

        const passwordField = await getPasswordField ();
        await passwordField.setValue('Czechitas124 ');

        const submitButton = await button();
        await submitButton.click();

        const errorWrongPassword = $('.invalid-feedback');
        console.log('Text Erroru:' + await errorWrongPassword.getText());

        await browser.pause(2000);

    });

    it("4.1.3 - Správné údaje", async () => {
    
        const emailField = await getEmailField();
        await emailField.setValue(username);

        const passwordField = await getPasswordField ();
        await passwordField.setValue(password);

        const submitButton = await button();
        await submitButton.click();

        const jmenoUzivatele = await getUserName();
        console.log("Jméno uživatele je: " + await jmenoUzivatele.getText());
        

        await browser.pause(2000);

    });

    it("4.1.4 - Logout", async () => {
    
        const emailField = await getEmailField();
        await emailField.setValue(username);

        const passwordField = await getPasswordField ();
        await passwordField.setValue(password);

        const submitButton = await button();
        await submitButton.click();

        const jmenoUzivatele = await getUserName();
        await jmenoUzivatele.click();

        const logoutLink = $('#logout-link');
        await logoutLink.click();

        console.log("Uživatel je přihlášen: " + await jmenoUzivatele.isDisplayed());
        console.log ("Navbar text: " + await $('.navbar-right').$('.nav-link').getText());
    
        await browser.pause(2000);
    });

});