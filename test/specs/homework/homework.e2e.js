describe('Homework', async () => {

    it('should open page and create screenshot', async () => {
//ÚKOL 1
        await browser.reloadSession();

        await browser.url('/registrace');

        await browser.saveScreenshot('registrace.png');

        await browser.pause(5000);

//ÚKOL 2
        await browser.url('/registrace');

        const nameField = await $('#name');
        console.log(await nameField.getHTML());
        
        const emailField = await $('#email');
        console.log(await emailField.getHTML());
        
        const passwordField = await $('#password');
        console.log(await passwordField.getHTML());
        
        const passwordConfirmField = await $('#password-confirm');
        console.log(await passwordConfirmField.getHTML());
        
        const registrationButton = await $('.btn-primary');
        console.log(await registrationButton.getHTML());









    });

});
