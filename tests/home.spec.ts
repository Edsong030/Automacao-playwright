import { test, expect } from '@playwright/test'


test('Acessar o task poker', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle('Task Poker')




})














