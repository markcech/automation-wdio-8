describe('Homework', async () => {

//ÚKOL 1
    it('should open page and create screenshot', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');

        await browser.saveScreenshot('registrace.png');

        await browser.pause(2000);

    });

    it('should open registration page and check its elements', async () => {

    await browser.url('/registrace');

    });


//ÚKOL 2 a 3
        

        const nameField = await $('#name');
        console.log(await nameField.getHTML());
        await nameField.setValue("Anna Barborová");
        
        const emailField = await $('#email');
        console.log(await emailField.getHTML());
        await emailField.setValue("anna.barborova@email.cz");
        
        const passwordField = await $('#password');
        console.log(await passwordField.getHTML());
        await passwordField.setValue("passwordAnna1");

        const passwordConfirmField = await $('#password-confirm');
        console.log(await passwordConfirmField.getHTML());
        await passwordConfirmField.setValue("passwordAnna1");
        
        const registrationButton = await $('.btn-primary');
        console.log(await registrationButton.getHTML());
        await registrationButton.click();

        await browser.pause(2000);

//ÚKOL 4









    });

});
