import { expect, test } from '@playwright/test'

test.describe('Remove node', () => {
  test.beforeEach(async ({ page }) => {
    const add = page.getByText('Add node')

    await page.goto('/')
    await add.click()
  })

  test('removes nodes', async ({ page }) => {
    const node = page.getByLabel('Draggable node')
    const remove = page.getByText('Remove node')

    await node.click()
    await remove.click()
    await expect(node).toBeHidden()
  })

  test('can not remove a node when it is has not been grabbed', async ({
    page,
  }) => {
    const remove = page.getByText('Remove node')

    await expect(remove).toBeDisabled()
  })
})
