import { username, password } from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

        it('should open login page', async () => {

                await browser.reloadSession();

                await browser.url('/prihlaseni');

                //1 TESTOVACÍ FRAMEWORK
                        // const windowSize = await browser.getWindowSize();

                        // console.log(windowSize);

                        // await browser.saveScreenshot('login_page.png');
                
                //2 - SELEKTORY 
                        // const emailField = await $('#email');
                        // console.log(await emailField.getHTML()); //vypíše HTML
                        // console.log(await emailField.getText()); //vypíše text
                        
                // CVIČENÍ SELEKTORY
                        // //podle tagu
                        // const formTag = await $('form');
                        // console.log(await formTag.getHTML());
                        
                        // const inputTag = await $('input');
                        // console.log(await inputTag.getHTML());
                
                        // const buttonTag = await $('button');
                        // console.log(await buttonTag.getHTML());
                
                        // //podle id
                        // const emailFieldId = await $('#email');
                        // console.log(await emailFieldId.getHTML());
                      
                        // const passwordField = await $('#password');
                        // console.log(await passwordField.getHTML());
                
                        // //podle třídy
                        // const loginBtn = await $('.btn-primary');
                        // console.log(await loginBtn.getHTML());
                        
                        // const emailFieldName = await $('[name="email"]');
                        // console.log(await emailFieldName.getHTML());
                
                        // //podle atributu
                
                        // const passwordFieldAtr = await $('[type="email"]');
                        // console.log(await passwordFieldAtr.getHTML());
                        
                        // const atributAss = await $('[type*="ass"]');
                        // console.log(await atributAss.getHTML());
                        
                        // const atributWord = await $('[type$="word"]');
                        // console.log(await atributWord.getHTML());
                        
                        // const atributPass = await $('[type^="pass"]');
                        // console.log(await atributPass.getHTML());
                
                        // //kombinace
                
                


                //3 - INTERAKCE S ELEMENTY

                        // const email_Field = await $('#email');

                        // console.log("Email field is displayed:" + await email_Field.isDisplayed());

                        // console.log("Email field is enabled:" + await email_Field.isEnabled());

                        // console.log('Email field label:' + await emailLabel.getText());

                        // await email_Field.setValue('muj-email@czechitas.cz');
                        // await browser.pause(2000);
                        // await email_Field.clearValue();
                        // await browser.pause(2000);
                        // await email_Field.setValue('muj-email-2@czechitas.cz');
                        // await browser.pause(2000);

                        // const submit_Button = $('.btn-primary');
                        // await submit_Button.click();

                        // const forgottenPaswordLink = $('form').$('a');

                        // console.log('Odkaz:' + await forgottenPaswordLink.getAttribute('href'));
                        // await forgottenPaswordLink.click();

                        // const email_Field = $('#email');
                        // const passwordField = $('#password');
                        // const submitButton = $('.btn-primary');

                        // await email_Field.setValue('da-app.admin@czechitas.cz');
                        // await passwordField.setValue('Czechitas123');
                        // await submitButton.click();

                        // const applicationLink = $('=Přihlášky');
                        // await applicationLink.click();

                        // await browser.pause(3000);

                        // const tableRows = await $('#DataTables_Table_0').$('tbody').$$('tr');

                        // console.log('Pocet radku:' + tableRows.length);

                        // await tableRows[4].waitForExist();
                        // console.log('Pocet radku:' + tableRows.length);


                        //         console.log(await tableRows[3].getText());
                        //  //  ???     console.log(await tableRows.getText());



                //4 - ORGANIZACE TESTŮ

                        //CVIČENÍ 1

                        //1-3
                        const submitButton = $('.btn-primary');
                        await submitButton.click();
                        await browser.pause(2000);

                        //4-6
                        const emailField = $('#email');
                        const passwordField = $('#password');
                        const errorWrongPassword = $('.invalid-feedback')

                        await emailField.setValue(username);
                        await passwordField.setValue('Czechitas124 ');
                        await browser.pause(2000);
                        await submitButton.click();
                        console.log('Text Erroru:' + (await errorWrongPassword.getText()));

                        //7-9
                        await browser.pause(2000);
                        await emailField.setValue(username);
                        await passwordField.setValue(password);
                        await browser.pause(2000);
                        await submitButton.click();

                        const lisak = $('.nav');
                        console.log('Přihlášený uživatel:' + (await lisak.getText()));


                        //10-13
                        const applicationLink = $('=Přihlášky');
                        await browser.pause(2000);
                        await applicationLink.click();

                        const tableRows = await $('.dataTable').$('tbody').$$('tr');
                        console.log('Pocet radku:' + tableRows.length);
                        for (const row of rows) {
                                const rowText = await row.getText()
                                console.log(rowText);
                        };

                        const searchInput = $('input[type="search"]');
                        const loading = $('#DataTables_Table_0_processing');
                        const searchText = 'mar';

                        await searchInput.setValue(searchText);
                        await loading.waitForDisplayed();
                        await loading.waitForDisplayed({ reverse: true });

                        const filteredRows = await $('.dataTable').$('tbody').$$('tr')
                        console.log('There are ' + filteredRows.length + ' filtered rows in the table');
                        for (const row of filteredRows) {
                                console.log(await row.getText());
                        }

                        const logoutLink = $('#logout-link');

                        await userNameDropdown.click();
                        await logoutLink.click();

                        console.log('User is logged in: ' + await userNameDropdown.isDisplayed());
                        console.log('Navbar text: ' + await navbarRight.getText());




                // 5 - ASERTACE
                
                







                await browser.pause(5000);

        });

});
