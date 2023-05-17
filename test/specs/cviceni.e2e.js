xdescribe("1 - Testovaci framework", async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    afterEach(async () => {
        await browser.pause(2000);
    });

    it("1.1 - should open login page", async () => {
        await browser.reloadSession();
        await browser.url("/prihlaseni");
        ;
    });

    it("1.2 - should get window size and screenshot", async () => {
        await browser.reloadSession();
        await browser.url("/prihlaseni");

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        await browser.saveScreenshot("login_page.png");
    });
});

xdescribe("2 - Selektory", async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    afterEach(async () => {
        await browser.pause(2000);
    });

    it("2.1 - podle tagu", async () => {
        const formTag = await $("form");
        console.log(await formTag.getHTML());

        const inputTag = await $("input");
        console.log(await inputTag.getHTML());

        const buttonTag = await $("button");
        console.log(await buttonTag.getHTML());
    });

    it("2.2 - podle ID", async () => {
        const emailFieldId = await $("#email");
        console.log(await emailFieldId.getHTML());

        const passwordField = await $('#password');
        console.log(await passwordField.getHTML());
    });

    it("2.3 - podle class", async () => {
        const loginBtn = await $('.btn-primary');
        console.log(await loginBtn.getHTML());
        
        const emailFieldName = await $('[name="email"]');
        console.log(await emailFieldName.getHTML());
    });
  
    it("2.4 - podle atributu", async () => {
        const passwordFieldAtr = await $('[type="email"]');
        console.log(await passwordFieldAtr.getHTML());
        
        const atributAss = await $('[type*="ass"]');
        console.log(await atributAss.getHTML());
        
        const atributWord = await $('[type$="word"]');
        console.log(await atributWord.getHTML());
        
        const atributPass = await $('[type^="pass"]');
        console.log(await atributPass.getHTML());
    });

    it("2.4 - podle kombinace", async () => {
        
    });
});

describe("3 - Interakce s elementy", async () => {

    xit("3.1 - zjištění stavu políčka email", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const emailField = $('#email');
        console.log('Email field is displayed:' + await emailField.isDisplayed());
        console.log('Email field is enabled:' + await emailField.isEnabled());
    });
    
    xit("3.2 - zjištění stavu políčka password", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const passwordField = $('#password');
        console.log('Password field is displayed:' + await passwordField.isDisplayed());
        console.log('Password field is enabled:' + await passwordField.isEnabled());
    });
    
    xit("3.3 - výpis textu tlačítka na přihlášení", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const loginButton = $('.btn-primary');
        console.log('Text tlačítka:' + await loginButton.getText());
        
    });
    
    it("3.4 - zapomenuté heslo", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const forgottenPassword = $('form').$('a').getAttribute('href');
        console.log('Forgot password? link:' + await forgottenPassword);
    });



    
});
