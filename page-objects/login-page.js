class LoginPage {
  async navigateToLoginScreen() {
      await page.goto('https://mkt-ghostcard-web-qa.auth.eu-west-1.amazoncognito.com/login?redirect_uri=https%3A%2F%2Fghostcard-qa.cepsacorp.com%2Fparseauth&response_type=code&client_id=6i92n420erdjdkvseqto46i2u8&state=%257B%2522nonce%2522%253A%2522kzJN4gk6Eg%2522%252C%2522requestedUri%2522%253A%2522%252F%2522%257D&scope=profile%20openid&code_challenge_method=S256&code_challenge=g9mMSzKviJj1SVa9lDaWw0e8EFnsy2yO0KGBEDnm3h0');
  }

  async submitLoginForm() {

  await page.getByRole('button', { name: 'transportista' }).click();
  await page.getByPlaceholder('Introduce su usuario').click();
  await page.getByPlaceholder('Introduce su usuario').fill('usrghostcard01');
  await page.getByPlaceholder('Introduce su contraseña').click();
  await page.getByPlaceholder('Introduce su contraseña').fill('prueba1234');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

 // await page.getByText('OPERACIONES CON QR').click();
 // await page.getByRole('button', { name: 'Descargar histórico' }).click();
 // await page.getByRole('button', { name: 'ENVIAR CORREO' }).click();
 // await page.getByRole('button', { name: 'ENTENDIDO' }).click();

  }

  //async submitLoginWithParameters(username, password) {
  //  await page.fill("#user-name", username)
  //  await page.fill("#password", password)
  //  await page.click("#login-button")
  //}

  async assertUserIsLoggedIn() {
   await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  }

  //async pause() {
  //  await page.waitForTimeout(3000)
  //}
}

module.exports = { LoginPage }
