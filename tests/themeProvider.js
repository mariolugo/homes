import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../config/theme';

export const mountWithTheme = (children) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
