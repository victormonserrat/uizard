import { After, Before, Given, Then, When } from '@cucumber/cucumber'
import {
  Browser,
  BrowserContext,
  chromium,
  expect,
  Page,
} from '@playwright/test'
import express, { Express } from 'express'
import { Server } from 'http'

import config from './playwright'

export type Context = {
  app: Express
  browser: Browser
  context: BrowserContext
  page: Page
  server: Server
}

Before(async function (this: Context) {
  this.app = express()
  this.app.use(express.static('build'))
  this.app.get('/*', (_, res) => {
    res.sendFile('build/index.html')
  })
  this.server = this.app.listen(3000)
  this.browser = await chromium.launch()
  this.context = await this.browser.newContext(config.use)
  this.page = await this.context.newPage()

  await this.page.goto('/')
})

Given('there are {int} nodes', async function (this: Context, int: number) {
  const add = this.page.getByText('Add node')

  for (let index = 0; index < int; index++) await add.click()
})

When('I add {int} nodes', async function (this: Context, int: number) {
  const add = this.page.getByText('Add node')

  for (let index = 0; index < int; index++) await add.click()
})

When('I drag node {int}', async function (this: Context, int: number) {
  const main = this.page.getByRole('main')
  const node = (await this.page.getByLabel('Draggable node').all())[int - 1]

  await node.dragTo(main, {
    sourcePosition: { x: 0, y: 0 },
    targetPosition: { x: 4, y: 4 },
  })
})

When('I grab node {int}', async function (this: Context, int: number) {
  const node = (await this.page.getByLabel('Draggable node').all())[int - 1]

  await node.click()
})

When('I remove it', async function (this: Context) {
  const remove = this.page.getByText('Remove node')

  await remove.click()
})

When('I ungrab nodes', async function (this: Context) {
  const main = this.page.getByRole('main')

  await main.click({ position: { x: 0, y: 0 } })
})

Then('I should see {int} nodes', async function (this: Context, int: number) {
  const nodes = await this.page.getByLabel('Draggable node').count()

  expect(nodes).toBe(int)
})

Then(
  'I should see node {int} grabbed',
  async function (this: Context, int: number) {
    const node = (await this.page.getByLabel('Draggable node').all())[int - 1]

    await expect(node).toHaveAttribute('aria-current', 'true')
  },
)

Then(
  'I should see node {int} moved',
  async function (this: Context, int: number) {
    const node = (await this.page.getByLabel('Draggable node').all())[int - 1]

    await expect(node).toHaveCSS('left', /^(0px|0.5px)$/)
    await expect(node).toHaveCSS('top', /^(0px|0.5px)$/)
  },
)

Then(
  'I should see node {int} ungrabbed',
  async function (this: Context, int: number) {
    const node = (await this.page.getByLabel('Draggable node').all())[int - 1]

    await expect(node).toHaveAttribute('aria-current', 'false')
  },
)

Then('I should see remove disabled', async function (this: Context) {
  const remove = this.page.getByText('Remove node')

  await expect(remove).toBeDisabled()
})

After(async function (this: Context) {
  await this.page.close()
  await this.context.close()
  await this.browser.close()
  this.server.close()
})
