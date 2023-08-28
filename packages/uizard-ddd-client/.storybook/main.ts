import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/preset-create-react-app',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: '@storybook/react-webpack5',
  staticDirs: ['../public'],
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  webpackFinal: async (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []),
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      ...config.resolve,
      plugins: [new TsconfigPathsPlugin()],
    },
  }),
}

export default config
