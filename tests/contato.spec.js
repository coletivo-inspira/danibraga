const { test, expect } = require('@playwright/test');

test('teste de contato', async ({ page }) => {
    await page.route('**', async (route) => {
        if (route.request().method() === 'POST') {
            await route.fulfill({ status: 200, contentType: 'text/plain', body: 'ok' });
            return;
        }

        await route.continue();
    });

    await page.goto('/contato.html');

    await expect(page).toHaveTitle(/Contato/);
    await page.fill('input[name="name"]', 'Teste');
    await page.fill('input[name="email"]', 'teste@example.com');
    await page.fill('input[name="company"]', 'Pousada Exemplo');
    await page.selectOption('select[name="service"]', 'hospitality');
    await page.selectOption('select[name="budget"]', '20k-50k');
    await page.fill('textarea[name="message"]', 'Gostaria de conversar sobre interiores para um empreendimento de hospitalidade em Bonito.');
    await page.click('button[type="submit"]');

    await expect(page.locator('.form__success')).toBeVisible();
    await expect(page.locator('.form__success')).toContainText('Mensagem enviada');
});