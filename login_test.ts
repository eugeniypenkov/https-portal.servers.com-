import { user } from './misc/users.js';
import { login, logout } from './pages/login.js';
import { getProfileMenu } from './pages/topBar.js'
import { loader } from './pages/loader.js';

Feature('Login');


Scenario('Successful login',  async ({ I }) => {
    await login(user.login,user.password);
    loader();
    I.seeElement(await getProfileMenu(user.login), 15);
});

/*Scenario('Successful logout',  async ({ I }) => {
    await login(user.login,user.password);
    loader();
    await logout();
});
*/
