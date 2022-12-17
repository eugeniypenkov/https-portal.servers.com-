import { getProfileMenu } from "./topBar";
import { loader } from './loader';

const { I } = inject();

/**
 * Login
 *
 * @param {string} login
 * @param {string} password
 */
export function login(login, password) {
    I.amOnPage ('https://portal.servers.com/');
    I.click('Allow all');
    I.fillField('input[name="email"]', login);
    I.fillField('input[name="password"]', password);
    I.click('button[type=submit]');
    loader();
}

/**
 * Logout
 *
 * @param {string} login
 */
export function logout(login) {
    I.click(getProfileMenu(login));
    I.click ('Logout');
}
