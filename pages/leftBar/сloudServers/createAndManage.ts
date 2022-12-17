const { I } = inject();
import { select } from "../navigate";

const create = '//span[text()="Create server"]';
//Сделать енумчики
const location = '//*[@value="12"]';
const createCloud = '[title="Create Cloud Server"]';
const image = '//*[@value="09adbe08-ebcf-4bd7-9c1b-bf1c340a6045"]';
const configuration = '//*[@value="30"]';
const ssh = 'value="22:3d:5e:f0:53:24:4c:2a:19:91:9b:93:f4:95:39:de"';


/**
 * Enter password from email
 *
 * @param {string} location
 * @param {string} image
 * @param {string} configuration
 */
export function createServer () {
    select('Cloud Servers','Create & Manage');
    I.waitForVisible(create, 10);
    I.click(create);
    I.waitForVisible(location, 10);
    I.click(location);
    I.waitForVisible(createCloud, 10);
    I.click(image);
    I.click(configuration);
    I.fillField('//input[@name="name"]','tst')



}

