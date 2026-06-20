const { test, expect } = require('@playwright/test');

test('teste de contato', async ({ page }) => {
    await page.goto('http://localhost:3000/contato');
    await expect(page).toHaveTitle(/Contato/);
    await page.fill('input[name="nome"]', 'Teste');
    await page.fill('input[name="email"]', 'teste@example.com');
    await page.click('button[type="submit"]');
    await expect(page.locator('.mensagem-sucesso')).toBeVisible();
});