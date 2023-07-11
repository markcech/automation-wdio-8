describe("Registration page", async () => {

  beforeEach(async () => {
    await browser.reloadSession();
    await browser.url("/registrace");
  });

  it("should open registration page and check its elements", async () => {
    await browser.saveScreenshot("registrace.png");

    const pageTitle = await $("h1");
    await expect (await pageTitle.getText()).toEqual('Registrace');

    const nameField = await $("#name");
    await expect (nameField).toBeDisplayed();
    await expect (nameField).toBeEnabled();

    const emailField = await $("#email");
    await expect (emailField).toBeDisplayed();
    await expect (emailField).toBeEnabled();

    const passwordField = await $("#password");
    await expect (passwordField).toBeDisplayed();
    await expect (passwordField).toBeEnabled();

    const passwordConfirmField = await $("#password-confirm");
    await expect (passwordConfirmField).toBeDisplayed();
    await expect (passwordConfirmField).toBeEnabled();

    const submitButton = $(".btn-primary");
    await expect (submitButton).toBeDisplayed();
    await expect (submitButton).toBeEnabled();
    await expect (await submitButton.getText()).toEqual('Zaregistrovat');
  });

  it("should register new user", async () => {
    const nameField = await $("#name");
    await nameField.setValue("Zuzana Dubovkovová");

    const emailField = await $("#email");
    await emailField.setValue("zuzana.dubovkovova@email.cz");

    const passwordField = await $("#password");
    await passwordField.setValue("passwordZuzana1");

    const passwordConfirmField = await $("#password-confirm");
    await passwordConfirmField.setValue("passwordZuzana1");

    const registrationButton = await $(".btn-primary");
    await registrationButton.click();

    await browser.pause(2000);

    const userName = await $(".navbar-right").$('[data-toggle="dropdown"]');
    await expect(await userName.getText()).toEqual("Zuzana Dubovkovová");
  });

  it("should not register new user with already registered email", async () => {
    const nameField = await $("#name");
    await nameField.setValue("Barbora Dubovkovová");

    const emailField = await $("#email");
    await emailField.setValue("barbora.dubovkovova@email.cz");

    const passwordField = await $("#password");
    await passwordField.setValue("passwordBarbora1");

    const passwordConfirmField = await $("#password-confirm");
    await passwordConfirmField.setValue("passwordBarbora1");

    const registrationButton = await $(".btn-primary");
    await registrationButton.click();

    await browser.pause(2000);

    const error = $(".invalid-feedback");
    await expect (await error.getText()).toEqual ('Účet s tímto emailem již existuje');
    
    const toastMessage = $(".toast-message");
    await expect (await toastMessage.getText()).toEqual ('Některé pole obsahuje špatně zadanou hodnotu');
  });

  it("should not register new user with invalid password", async () => {
    const nameField = await $("#name");
    await nameField.setValue("Barbora Dubovkovová");

    const emailField = await $("#email");
    await emailField.setValue("barbora.dubovkovovava@email.cz");

    const passwordField = await $("#password");
    await passwordField.setValue("123456789");

    const passwordConfirmField = await $("#password-confirm");
    await passwordConfirmField.setValue("123456789");

    const registrationButton = await $(".btn-primary");
    await registrationButton.click();

    await browser.pause(2000);

    const wrongPasswordError = $(".invalid-feedback");
    await expect (await wrongPasswordError.getText()).toEqual ('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');

    const toastMessage = $(".toast-message");
    await expect (await toastMessage.getText()).toEqual ('Některé pole obsahuje špatně zadanou hodnotu');
  });
});


