import { Dimensions } from 'react-native';
import { darkColors, lightColors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { borderRadius } from './borderRadius';
const { width, height } = Dimensions.get('window');
const layout = {
  width,
  height,
  isSmallDevice: width < 375,
};

export const theme = {
  light: { colors: lightColors, spacing, layout, borderRadius, typography },
  dark: { colors: darkColors, spacing, layout, borderRadius, typography },
};
export type Theme = typeof theme;
export type ThemeMode = 'light' | 'dark' | 'system';
