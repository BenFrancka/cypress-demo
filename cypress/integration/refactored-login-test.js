/// <reference types="cypress" />
import {LoginPage} from '../pages/login-page';

const loginPage = new LoginPage();

it('tests a login component', () => {

    loginPage.visitPage('https://trytestingthis.netlify.app/');
    loginPage.enterUsername('test');
    loginPage.enterPassword('test');
    loginPage.clickLoginButton();
})