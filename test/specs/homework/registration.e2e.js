import RegistrationPage from "./registration.page";

async function getPageTitle() {
  return $('h1');
}

async function getNameField() {
  return $('#name');
}

async function getEmailField() {
  return $('#email');
}

async function getPasswordField() {
  return $('#password');
}

async function getPasswordConfirmField() {
  return $('#password-confirm');
}

async function getRegistrationButton() {
  return $('.btn-primary');
}

async function getUserName() {
  return $(".navbar-right").$('[data-toggle="dropdown"]');
}

async function getToastMessage() {
  return $(".toast-message");
}

async function registration() {
  const nameField = await getNameField();
  await nameField.setValue('Jana Dubovkovová');

  const emailField = await getEmailField();
  await emailField.setValue("jana.dubovkova@email.cz");

  const passwordField = await getPasswordField();
  await passwordField.setValue("passwordBarbora1");

  const passwordConfirmField = await getPasswordConfirmField();
  await passwordConfirmField.setValue("passwordBarbora1");

  const registrationButton = await getRegistrationButton();
  await registrationButton.click();
}

async function wrongPasswordRegistration() {
  const nameField = await getNameField();
  await nameField.setValue('Tana Dubovkovová');

  const emailField = await getEmailField();
  await emailField.setValue("tana.dubovkova@email.cz");

  const passwordField = await getPasswordField();
  await passwordField.setValue("123456");

  const passwordConfirmField = await getPasswordConfirmField();
  await passwordConfirmField.setValue("123456");

  const registrationButton = await getRegistrationButton();
  await registrationButton.click();
}

describe("Registration page", async () => {

  beforeEach(async () => {
    await browser.reloadSession();
    await browser.url("/registrace");
  });

  it("should open registration page and check its elements", async () => {
    await browser.saveScreenshot("registrace.png");

    const pageTitle = await getPageTitle();
    await expect (await pageTitle.getText()).toEqual('Registrace');

    const nameField = await getNameField();
    await expect (nameField).toBeDisplayed();
    await expect (nameField).toBeEnabled();

    const emailField = await getEmailField();
    await expect (emailField).toBeDisplayed();
    await expect (emailField).toBeEnabled();

    const passwordField = await getPasswordField();
    await expect (passwordField).toBeDisplayed();
    await expect (passwordField).toBeEnabled();

    const passwordConfirmField = await getPasswordConfirmField();
    await expect (passwordConfirmField).toBeDisplayed();
    await expect (passwordConfirmField).toBeEnabled();

    const registrationButton = await getRegistrationButton();
    await expect (registrationButton).toBeDisplayed();
    await expect (registrationButton).toBeEnabled();
    await expect (await registrationButton.getText()).toEqual('Zaregistrovat');
  });

  it("should register new user", async () => {
    
    registration();

    const userName = await getUserName();
    await expect(await userName.getText()).toEqual("Jana Dubovkovová");
  });

  it("should not register new user with already registered email", async () => {
    
    registration();

    const error = $(".invalid-feedback");
    await expect (await error.getText()).toEqual ('Účet s tímto emailem již existuje');
    
    const toastMessage = await getToastMessage();
    await expect (await toastMessage.getText()).toEqual ('Některé pole obsahuje špatně zadanou hodnotu');
  });

  it("should not register new user with invalid password", async () => {
    await wrongPasswordRegistration();

    const wrongPasswordError = $(".invalid-feedback");
    await expect (await wrongPasswordError.getText()).toEqual ('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');

    const toastMessage = await getToastMessage();
    await expect (await toastMessage.getText()).toEqual ('Některé pole obsahuje špatně zadanou hodnotu');

  });
});


