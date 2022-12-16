import {getProfileMenu} from "./topBar";

const { I } = inject();

/**
 * Login
 *
 * @param {string} login
 * @param {string} password
 */
function login(login, password) {
    I.amOnPage ('https://portal.servers.com/');
    I.click('Allow all');
    I.fillField('input[name="email"]', login);
    I.fillField('input[name="password"]', password);
    I.click('button[type=submit]');
}

/**
 * Logout
 */
function logout(login) {
    I.click(getProfileMenu(login));
    I.click ('Logout');
}

module.exports = {
    login,
    logout,
};
