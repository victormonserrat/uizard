import { expect, test } from '@playwright/test'

test.describe('Drag node', () => {
  test.beforeEach(async ({ page }) => {
    const add = page.getByText('Add node')

    await page.goto('/')
    await add.click()
  })

  test('drags nodes', async ({ page }) => {
    const main = page.getByRole('main')
    const node = page.getByLabel('Draggable node')

    await node.dragTo(main, {
      sourcePosition: { x: 0, y: 0 },
      targetPosition: { x: 4, y: 4 },
    })
    await expect(node).toHaveAttribute('aria-current', 'true')
    await expect(node).toHaveCSS('left', /^(0px|0.5px)$/)
    await expect(node).toHaveCSS('top', /^(0px|0.5px)$/)
  })
})
