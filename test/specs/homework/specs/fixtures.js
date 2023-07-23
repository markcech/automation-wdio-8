function generateEmail (username) {

  const randomNumber = Math.floor(Math.random() * 100);

  return username + randomNumber + "@email.cz";
}

export const name = 'John Soe';
export const passwordRegistration = 'John123456';
export const passwordRegistrationConfirm = 'John123456';
export const email = generateEmail(name.split(' ').join('.'));
