import { select } from '../navigate';

const { I } = inject();
const create = '[title="Create"]';
const cancel = '[title="Cancel"]';
const success = '//span[text()="Success"]';
const edit = '[title="Edit"]';
const del = '[title="Delete"]';
const save = '[title="Save"]';

/**
 * Fill contact fields
 *
 * @param {object} contactInfo
 */
export function fillField(contactInfo) {
    for (const [key, value] of Object.entries(contactInfo)) {
        I.clearField(`//*[contains(@*,'${key}')]`);
        I.fillField(`//*[contains(@*,'${key}')]`, `${value}`);
    }
    }

/**
 * Pick job role
 *
 * @param {string[]} jobRole
 */
export function pickJobRole (jobRole = []) {
    jobRole.forEach((role)=>{
        I.click (`//*[text()="${role}"]/input`)
    });

}

/**
 * Add contact details
 *
 */
export function addDetails () {
}

/**
 * Enter password from email
 *
 */
export function enterPass () {
    I.waitForVisible('[aria-label="Password required"]', 10);
}

/**
 * Create contact
 *
 * @param {object} contactInfo
 * @param {string[]} jobRole
 */
export function createContact(contactInfo, jobRole = []) {
    select('Profile','Contacts');
    I.click(create);
    I.waitForVisible(cancel);
    fillField(contactInfo);
    pickJobRole(jobRole);
    addDetails();
    I.click (create);
    I.waitForVisible(success);
}

/**
 * Edit contact
 *
 * @param {string} contact
 * @param {object} contactInfo
 * @param {string[]} jobRole
 */
export function editContact(contact, contactInfo, jobRole = []) {
    select('Profile','Contacts');
    I.click(`//*[@title="${contact}"]`);
    I.waitForVisible(edit);
    I.click(edit);
    I.waitForVisible(cancel);
    fillField(contactInfo);
    pickJobRole(jobRole);
    addDetails();
    I.click (save);
    I.waitForVisible(success);
}

/**
 * Delete contact
 *
 * @param {string} contact
 */
export function deleteContact(contact) {
    select('Profile','Contacts');
    I.click(`//*[@title="${contact}"]/../*/*[@role="button"]`);
    I.waitForVisible(cancel);
    I.click(del);
    I.waitForVisible(success);
}

/**
 * Check contact
 *
 * @param {string} contact
 * @param {object} contactInfo
 * @param {string[]} jobRole
 */
export async function checkContact(contact, contactInfo, jobRole = []) {
    select('Profile','Contacts');
    I.click(`//*[@title="${contact}"]`);
    I.waitForVisible(edit);
    I.click(edit);
    I.waitForVisible(cancel);
    for (const [key, value] of Object.entries(contactInfo)) {
        const grabedValue = await I.grabValueFrom(`//*[contains(@*,'${key}')]`);
        if (grabedValue !== value) return "Wrong value";
    }
    jobRole.forEach((role) =>{
        I.seeElement(`//*[text()="${role}"]/input[@checked]`);
    });

}
