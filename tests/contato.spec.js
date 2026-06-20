const { test, expect } = require('@playwright/test');

test('teste de contato', async ({ page }) => {
    // Mock netlify form submit
    await page.route('**/*', async (route) => {
        if (route.request().method() === 'POST') {
            await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
        } else {
            await route.continue();
        }
    });

    await page.goto('/contato.html');
    await expect(page).toHaveTitle(/Contato/);
    await page.fill('input[name="name"]', 'Teste');
    await page.fill('input[name="email"]', 'teste@example.com');
    await page.selectOption('select[name="service"]', 'identidade');
    await page.fill('textarea[name="message"]', 'Gostaria de um orçamento para identidade visual.');
    await page.click('button[type="submit"]');
    await expect(page.locator('.form__success')).toBeVisible();
});