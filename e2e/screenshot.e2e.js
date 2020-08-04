/* eslint-disable */
import { takeScreenshot } from '../src/screenshot';
describe('screenshot', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });
    it('should take screenshots', async () => {
        takeScreenshot('Home');
        // await expect(element(by.text('Hello!!!'))).toBeVisible();
    });
});