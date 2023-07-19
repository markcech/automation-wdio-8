class RegistrationPage {
  constructor() {
    this.url = '/registrace';
  }

get pageTitle() { return $('h1'); }
  
get nameField() { return $('#name'); }
  
get emailField() { return $('#email'); }
  
get passwordField() { return $('#password'); }
  
get passwordConfirmField() { return $('#password-confirm'); }
  
get registrationButton() { return $('.btn-primary'); }
  
get userName() { return $(".navbar-right").$('[data-toggle="dropdown"]'); }
  
get toastMessage() { return $(".toast-message"); }

get wrongPasswordError () { return $(".invalid-feedback"); }

get wrongEmailError () { return $(".invalid-feedback"); }



async open() {
  await browser.reloadSession();
  await browser.url(this.url);
}  

async registration(name, email, passwordRegistration, passwordRegistrationConfirm) {
  await this.nameField.setValue(name);
  await this.emailField.setValue(email);
  await this.passwordField.setValue(passwordRegistration);
  await this.passwordConfirmField.setValue(passwordRegistrationConfirm);
  await this.registrationButton.click();
}

}

export default new RegistrationPage();