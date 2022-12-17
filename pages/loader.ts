const { I } = inject();

/**
 * Wait loader invisible for admin
 *
 * @param {string} [seeElement='.ready'] - xpath element
 */
export function loader(seeElement = '[id="app"]') {
    I.waitForInvisible('.preloader', 15);
    I.waitForVisible(seeElement, 15);
}

