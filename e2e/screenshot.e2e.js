/* eslint-disable */
import { takeScreenshot } from '../src/screenshot';
describe('screenshot', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });
    it('should take screenshots', async () => {
        alert('SCREENSHOT')
        takeScreenshot('Home');
        await expect(element(by.id('SEARCH'))).toBeVisible();
        await element(by.id('SEARCH')).tap();
        takeScreenshot('Search');
        await expect(element(by.id('GOBACK'))).toBeVisible();
        await element(by.id('GOBACK')).tap();
        await expect(element(by.id('CART'))).toBeVisible();
        await element(by.id('CART')).tap();
        takeScreenshot('Cart');

        // await expect(element(by.text('Hello!!!'))).toBeVisible();
    });
});