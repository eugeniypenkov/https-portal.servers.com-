import { user } from '../../misc/users';
import { login} from '../../pages/login';
import { createContact, editContact, deleteContact, checkContact } from '../../pages/leftBar/profile/contacts';

Feature('Contacts');


Scenario('Add contact',  async ({ I }) => {
    await login(user.login,user.password);
    const contactInfo = {
        fname: 'GriSHA',
        lname: 'Sorokin',
        middlename: 'Yasirovich',
        email: 'asfdsdf@mail.com',
        email2: 'asfdsdf2323@mail.com',
        phone_number: '89273914563',
        company: 'Company',
        title: 'Title',
        role: 'Role',
        nickname: 'Nickname',
        note: 'Note',
    };
    const jobRole = ['Technical', 'Billing', 'Abuse'];
    createContact(contactInfo, jobRole);
    await checkContact('GriSHA Sorokin', contactInfo, jobRole);

});

Scenario('Edit contact',  async ({ I }) => {
    await login(user.login,user.password);
    const contactInfo = {
        fname: 'GriSHA',
        lname: 'Sorokin',
        middlename: 'Yasirovich',
        email: 'asfdsdf@mail.com',
        email2: 'asfdsdf2323@mail.com',
        phone_number: '89273914563',
        company: 'Company',
        title: 'Title',
        role: 'Role',
        nickname: 'Nickname',
        note: 'Note',
    };
    const jobRole = ['Technical', 'Billing'];
    editContact('GriSHA Sorokin', contactInfo, jobRole);
    await checkContact('GriSHA Sorokin', contactInfo, jobRole);

});

Scenario('Delete contact',  async ({ I }) => {
    await login(user.login,user.password);
    deleteContact('GriSHA Sorokin');

});

