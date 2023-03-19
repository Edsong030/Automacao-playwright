import { test } from '@playwright/test'


test('Criar sala ', async ({ page }) => {
    await page.goto('/')
    await page.click('body > app-root > div > app-login > div > div > ul > li:nth-child(2) > a')


    const inputNgcontent = page.locator('input[placeholder="Min Two Letters"]',)
    const inputNgcontent_1 = page.locator('input[placeholder="Five Digit Code"]')
    const buttonClick = page.locator('button[type="submit"]')
    await inputNgcontent.fill('Teste')
    await inputNgcontent_1.fill('123456')
    await buttonClick.click()


})    