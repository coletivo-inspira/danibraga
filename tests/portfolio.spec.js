const { test, expect } = require('@playwright/test');

test('portfolio filtra categorias e abre detalhe bilíngue', async ({ page }) => {
    await page.addInitScript(() => window.localStorage.setItem('dbd_lang', 'pt'));
    await page.goto('/projetos.html');

    await page.getByRole('button', { name: 'Atrativos Turísticos' }).click();
    await expect(page.locator('.portfolio-item:not(.is-hidden)')).toHaveCount(2);
    await expect(page.locator('.portfolio-item:not(.is-hidden)').first()).toContainText('Estrela do Formoso');

    await page.locator('.portfolio-item:not(.is-hidden)').first().locator('.card__title a').click();

    await expect(page).toHaveURL(/slug=estrela-do-formoso/);
    await expect(page.locator('#project-title')).toHaveText('Estrela do Formoso');
    await expect(page.locator('#project-tagline')).toContainText('Bangalos privativos');

    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.locator('#project-tagline')).toContainText('Private bungalows and an outdoor bar');
});