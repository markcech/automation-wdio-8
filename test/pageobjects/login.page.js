class LoginPage {

    constructor() {
        this.url = '/prihlaseni';
    }

    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('.btn-primary'); }

    async open() {
        await browser.reloadSession();
        await browser.url(this.url);
    }

    async login(username, password) {
        await this.emailField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
