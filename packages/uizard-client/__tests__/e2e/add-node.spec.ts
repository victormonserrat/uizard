import { expect, test } from '@playwright/test'

test.describe('Add node', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('adds nodes', async ({ page }) => {
    const add = page.getByText('Add node')
    const node = page.getByLabel('Draggable node')

    await expect(node).not.toBeAttached()
    await add.click()
    await expect(node).toBeVisible()
  })
})
