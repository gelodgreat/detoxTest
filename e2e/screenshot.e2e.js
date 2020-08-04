/* eslint-disable */
import { takeScreenshot } from '../src/screenshot';
import axios from 'axios';
import jest from 'jest'
describe('screenshot', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });
    it('should take screenshots', async () => {
        await new Promise(resolve => setTimeout(resolve, 20000));
        takeScreenshot('Home');
        // await expect(element(by.text('Hello!!!'))).toBeVisible();
    });
});