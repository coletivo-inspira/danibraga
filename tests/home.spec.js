const { test, expect } = require('@playwright/test');

test('home exibe conteúdo real e alterna para EN', async ({ page }) => {
    await page.addInitScript(() => window.localStorage.setItem('dbd_lang', 'pt'));
    await page.goto('/');

    await expect(page).toHaveTitle(/Dani Braga Design/);
    await expect(page.locator('h1')).toHaveText('Espaços que hospedam histórias');
    await expect(page.locator('.featured-projects .card--project')).toHaveCount(3);

    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.locator('h1')).toHaveText('Spaces that host stories');
    await expect(page.locator('.home-hero__subtitle')).toContainText('Interior design projects for resorts');
});