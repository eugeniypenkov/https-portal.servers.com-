import { user } from '../misc/users';
import { login, logout } from '../pages/login';

Feature('Login');


Scenario('Successful login',  async ({ I }) => {
    login(user.login,user.password);
    I.see(user.login);
});

Scenario('Successful logout',  async ({ I }) => {
    login(user.login,user.password);
    logout(user.login);
    I.see('Sign in');
});

