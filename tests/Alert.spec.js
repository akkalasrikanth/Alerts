import { test } from '@playwright/test';

test('Handling Alert', async ({ page }) => {

    await page.goto('https://qajobbyapp.ccbp.tech/login');

    await page.locator('#userNameInput').fill('rahul');
    await page.locator('#passwordInput').fill('rahul@2021');
    await page.locator('.login-button').click();
    await page.locator('.logout-desktop-btn').waitFor();
     page.on('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        await page.waitForTimeout(3000);
        await dialog.accept();
    });

    await page.locator('.logout-desktop-btn').click();

});