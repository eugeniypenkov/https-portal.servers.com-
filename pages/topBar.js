//const { I } = inject();

/**
 * Get profile menu locator
 *
 * @param {string} login
 */
function getProfileMenu(login) {
    return `//span[text()="${login}"]`;
}

module.exports = {
    getProfileMenu,
};
