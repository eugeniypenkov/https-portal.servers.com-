//const { I } = inject();

/**
 * Get profile menu locator
 *
 * @param {string} login
 */
export function getProfileMenu(login) {
    return `//span[text()="${login}"]`;
}

