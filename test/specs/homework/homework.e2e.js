xdescribe("Homework 1", async () => {
  it("should open page and create screenshot", async () => {
    await browser.reloadSession();

    await browser.url("/registrace");

    await browser.saveScreenshot("registrace.png");

    await browser.pause(2000);
  });
});

xdescribe("Homework 2", async () => {
  it("should open registration page and check its elements", async () => {
    await browser.reloadSession();

    await browser.url("/registrace");

    const nameField = await $("#name");
    console.log(await nameField.getHTML());

    const emailField = await $("#email");
    console.log(await emailField.getHTML());

    const passwordField = await $("#password");
    console.log(await passwordField.getHTML());

    const passwordConfirmField = await $("#password-confirm");
    console.log(await passwordConfirmField.getHTML());

    const registrationButton = await $(".btn-primary");
    console.log(await registrationButton.getHTML());

    await browser.pause(2000);
  });
});

xdescribe("Homework 3", async () => {
  it("should open registration page, fill up credentials and click registration button", async () => {
    await browser.reloadSession();

    await browser.url("/registrace");

    const nameField = await $("#name");
    console.log(await nameField.getHTML());
    await nameField.setValue("Anna Barborová");

    const emailField = await $("#email");
    console.log(await emailField.getHTML());
    await emailField.setValue("anna.barborova@email.cz");

    const passwordField = await $("#password");
    console.log(await passwordField.getHTML());
    await passwordField.setValue("passwordAnna1");

    const passwordConfirmField = await $("#password-confirm");
    console.log(await passwordConfirmField.getHTML());
    await passwordConfirmField.setValue("passwordAnna1");

    const registrationButton = await $(".btn-primary");
    console.log(await registrationButton.getHTML());
    await registrationButton.click();

    await browser.pause(2000);
  });
});

describe("Homework 4", async () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await browser.url("/registrace");
  });

  xit("should open registration page and check its elements", async () => {
    const pageTitle = await $("h1");
    console.log("Page title is: " + (await pageTitle.getText()));

    const nameField = await $("#name");
    console.log("Name field is displayed: " + (await nameField.isDisplayed()));
    console.log("Name field is enabled: " + (await nameField.isEnabled()));

    const emailField = await $("#email");
    console.log("Email field is displayed: " + (await emailField.isDisplayed()));
    console.log("Email field is enabled: " + (await emailField.isEnabled()));

    const passwordField = await $("#password");
    console.log("Password field is displayed: " + (await passwordField.isDisplayed()));
    console.log("Password field is enabled: " + (await passwordField.isEnabled()));

    const passwordConfirmField = await $("#password-confirm");
    console.log("Password confirm field is displayed: " + (await passwordConfirmField.isDisplayed()));
    console.log("Password confirm field is enabled: " +(await passwordConfirmField.isEnabled()));

    const submitButton = $(".btn-primary");
    console.log("Submit button is displayed: " + (await submitButton.isDisplayed()));
    console.log("Submit button is enabled: " + (await submitButton.isEnabled()));
  });

  xit("should register new user", async () => {
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

    const userName = await $(".navbar-right").$('[data-toggle="dropdown"]');
    console.log("User name is: " + await userName.getText());
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

    // const invalidEmailFeedback = await $('[name = email]').$('[span class = invalid-feedback]');
    console.log("Invalid feedback text is: " + (await $$('.invalid-feedback')).getText());
  });

  xit("should not register new user with invalid password", async () => {
    await browser.url("/registrace");
  });
});
