const { I } = inject();

/**
 * Select left menu
 *
 * @param {string} firstStep
 * @param {string} [secondStep=''] secondStep
 */
export function select(firstStep, secondStep = '') {
    I.waitForVisible(`//span[text()="${firstStep}"]`, 10);
    I.click (`//span[text()="${firstStep}"]`);
    if (secondStep !== '') {
        I.click (`//a/span[text()="${secondStep}"]`);
    }
}
