import { user } from '../../misc/users';
import {login} from "../../pages/login";
import {createServer} from "../../pages/leftBar/сloudServers/createAndManage";

Feature('Cloud Servers');

Scenario('Create server',  async ({ I }) => {
    await login(user.login,user.password);
    createServer();
});
