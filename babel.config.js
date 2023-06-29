process.env.TAMAGUI_TARGET = 'native';

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@tamagui/babel-plugin',
      {
        components: ['@hackily/tamagui-ds-repro', 'tamagui'],
        config: './tamagui.config.js',
        importsWhitelist: [],
        disableExtraction: process.env.NODE_ENV === 'development',
      },
    ],
    [
      'transform-inline-environment-variables',
      {
        include: ['TAMAGUI_TARGET'],
      },
    ],
  ],
};
