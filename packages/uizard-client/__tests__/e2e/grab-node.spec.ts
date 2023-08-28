import { expect, test } from '@playwright/test'

test.describe('Grab node', () => {
  test.beforeEach(async ({ page }) => {
    const add = page.getByText('Add node')

    await page.goto('/')
    await add.click()
  })

  test('grabs nodes', async ({ page }) => {
    const node = page.getByLabel('Draggable node')

    await expect(node).toHaveAttribute('aria-current', 'false')
    await node.click()
    await expect(node).toHaveAttribute('aria-current', 'true')
  })

  test('ungrabs nodes', async ({ page }) => {
    const main = page.getByRole('main')
    const node = page.getByLabel('Draggable node')

    await node.click()
    await main.click({ position: { x: 0, y: 0 } })
    await expect(node).toHaveAttribute('aria-current', 'false')
  })
})
