import { username, password } from './fixtures.js'

// LEKCE 1 - TESTOVACÍ FRAMEWORK
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

// LEKCE 2 - SELEKTORY
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

// LEKCE 3 - INTERAKCE S ELEMENTY
    //CVIČENÍ 1
xdescribe("3.1 - Interakce s elementy 1", async () => {

    xit("3.1.1 - zjištění stavu políčka email", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const emailField = $('#email');
        console.log('Email field is displayed:' + await emailField.isDisplayed());
        console.log('Email field is enabled:' + await emailField.isEnabled());
    });

    xit("3.1.2 - zjištění stavu políčka password", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const passwordField = $('#password');
        console.log('Password field is displayed:' + await passwordField.isDisplayed());
        console.log('Password field is enabled:' + await passwordField.isEnabled());
    });

    xit("3.1.3 - výpis textu tlačítka na přihlášení", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const loginButton = $('.btn-primary');
        console.log('Text tlačítka:' + await loginButton.getText());

    });

    xit("3.1.4 - zapomenuté heslo", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const forgottenPassword = $('form').$('a').getAttribute('href');
        console.log('Forgot password? link:' + await forgottenPassword);
    });

    xit("3.1.5 - přihlášení", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        

        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();
        await browser.pause(2000);
    });

    xit("3.1.6 - nalezení jména", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        

        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        const jmenoUzivatele = $('.navbar-right').$('strong').getText();
    
        console.log("Jméno uživatele je:" + await jmenoUzivatele);
        await browser.pause(2000);
    });

});

    //CVIČENÍ 2
describe("3.2 - Interakce s elementy 2", async () => {
    xit("3.2.1 - Kliknutí na přihlášky", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        

        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        await $('=Přihlášky').click();

        await browser.pause(2000);
    });
    it("3.2.2 - Výpis řádků tabulky", async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        

        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        await $('=Přihlášky').click();
        await browser.pause(1000);

        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log("Počet řádků tabulky je " + rows.length);

        


        await browser.pause(2000);
    });



});

// LEKCE 4 - PSANÍ A ORGANIZACE TESTŮ
xdescribe("4- Psaní a organizace testů", async () => {



});


// LEKCE 5 - ASERTACE
xdescribe("5 - Assertace", async () => {

    describe('Login Page', async () => {

        beforeEach(async () => {
            await browser.reloadSession();
            await browser.url('/prihlaseni');
        });

        it('should show login form', async () => {

            const emailField = await $('#email');
            await expect (emailField).toBeDisplayed();
            await expect (emailField).toBeEnabled();

            const passwordField = await $('#password');
            await expect (passwordField).toBeDisplayed();
            await expect (passwordField).toBeEnabled();

            const loginButton = await $('.btn-primary');
            await expect (loginButton).toBeDisplayed();
            await expect (loginButton.getText()).toEqual('Přihlásit');

        });

        xit('should login with valid credentials', async () => {
            const emailField = $('#email');
            const passwordField = $('#password');
            const loginButton = $('.btn-primary');

            await emailField.setValue(username);
            await passwordField.setValue(password);
            await loginButton.click();

            const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
            console.log('User currently logged in: ' + await userNameDropdown.getText());
        });

        xit('should not login with invalid credentials', async () => {

            const emailField = $('#email');
            const passwordField = $('#password');
            const loginButton = $('.btn-primary');

            await emailField.setValue(username);
            await passwordField.setValue('invalid');
            await loginButton.click();

            const toastMessage = $('.toast-message');
            console.log('Error: ' + await toastMessage.getText());

            const fieldError = $('.invalid-feedback');
            console.log('Field error: ' + await fieldError.getText());

            console.log('Email field is dislayed: ' + await emailField.isDisplayed());
            console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
            console.log('Login button is dislayed: ' + await loginButton.isDisplayed());
        });

        xit('should logout', async () => {
            const emailField = $('#email');
            const passwordField = $('#password');
            const loginButton = $('.btn-primary');
            const navbarRight = $('.navbar-right')
            const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
            const logoutLink = $('#logout-link');

            await emailField.setValue(username);
            await passwordField.setValue(password);
            await loginButton.click();

            console.log('User currently logged in: ' + await userNameDropdown.getText());

            await userNameDropdown.click();
            await logoutLink.click();

            console.log('User is logged in: ' + await userNameDropdown.isDisplayed());
            console.log('Navbar text: ' + await navbarRight.getText());
        });
    });

    xdescribe('Applications Page', async () => {

        beforeEach(async () => {
            await browser.reloadSession();
            await browser.url('/prihlaseni');
            await $('#email').setValue(username);
            await $('#password').setValue(password);
            await $('.btn-primary').click();
            await $('=Přihlášky').click();
            await browser.pause(1000);
        });

        it('should list all applications', async () => {
            console.log('Page title is: ' + await $('h1').getText());

            const rows = await $('.dataTable').$('tbody').$$('tr');
            console.log('There are ' + rows.length + ' rows in the table');
            for (const row of rows) {
                const rowText = await row.getText()
                console.log(rowText);
            }
        });

        it('should filter in applications', async () => {
            const searchInput = $('input[type="search"]');
            const loading = $('#DataTables_Table_0_processing');
            const searchText = 'mar';

            await searchInput.setValue(searchText);
            await browser.pause(1000);
            await loading.waitForDisplayed({ reverse: true });

            const filteredRows = await $('.dataTable').$('tbody').$$('tr')
            console.log('There are ' + filteredRows.length + ' filtered rows in the table');
            for (const row of filteredRows) {
                console.log(await row.getText());
            }
        });
    });
});



