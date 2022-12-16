const { I } = inject();

/**
 * Wait loader invisible for admin
 *
 * @param {string} [seeElement='.ready'] - xpath element
 */
function loader(seeElement = '[id="app"]') {
    I.waitForInvisible('.preloader', 15);
    I.waitForVisible(seeElement, 15);
}

module.exports = {
    loader,
};
