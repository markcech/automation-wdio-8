import {name, email, passwordRegistration, passwordRegistrationConfirm} from './fixtures.js';

import RegistrationPage from './registration.page.js';

describe("Registration page", async () => {

  beforeEach(async () => {
    
    await RegistrationPage.open();
  });

  it("should open registration page and check its elements", async () => {
    
    await expect (RegistrationPage.nameField).toBeDisplayed();
    await expect (RegistrationPage.nameField).toBeEnabled();
    await expect (RegistrationPage.emailField).toBeDisplayed();
    await expect (RegistrationPage.emailField).toBeEnabled();
    await expect (RegistrationPage.passwordField).toBeDisplayed();
    await expect (RegistrationPage.passwordField).toBeEnabled();
    await expect (RegistrationPage.passwordConfirmField).toBeDisplayed();
    await expect (RegistrationPage.passwordConfirmField).toBeEnabled();
    await expect (RegistrationPage.registrationButton).toBeDisplayed();
    await expect (RegistrationPage.registrationButton).toBeEnabled();
    await expect (await RegistrationPage.registrationButton.getText()).toEqual('Zaregistrovat');
  });

  it("should not register new user with invalid password", async () => {
   
    await RegistrationPage.registration(name,email,'123456', '123456');

    await expect (await RegistrationPage.wrongPasswordError.getText()).toEqual ('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
    await expect (await RegistrationPage.toastMessage.getText()).toEqual ('Některé pole obsahuje špatně zadanou hodnotu');
  });

  it("should register new user", async () => {
    
    await RegistrationPage.registration(name, email, passwordRegistration, passwordRegistrationConfirm);
    
    await expect(await RegistrationPage.userName.getText()).toEqual(name);
  });

  it("should not register new user with already registered email", async () => {
    
    await RegistrationPage.registration(name, email, passwordRegistration, passwordRegistrationConfirm);

    await expect (await RegistrationPage.wrongEmailError.getText()).toEqual ('Účet s tímto emailem již existuje');
    await expect (await RegistrationPage.toastMessage.getText()).toEqual ('Některé pole obsahuje špatně zadanou hodnotu');
  });

  
});


