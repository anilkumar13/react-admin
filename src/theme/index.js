import React,{useMemo} from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@mui/material';
import {ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';


ThemeProvider.propTypes = {
  selectedTheme:PropTypes.number,
  children: PropTypes.node,
};

export default function ThemeProvider({ children, selectedTheme}) {
  const themeOptions = {
    themeOptions1:useMemo(
      () => ({
        palette,
        shape: { borderRadius: 8 },
        typography,
        shadows,
        customShadows,
      }),
      []
    ),
    themeOptions2: useMemo(
      () => ({
        palette,
        shape: { borderRadius:0 },
        typography,
        shadows,
        customShadows,
        transitions: {
          duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
          },
          easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)', 
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
          },
        },
      }),
      []
    )
  }
  
  const themeOpt = themeOptions[`themeOptions${selectedTheme}`];
  const theme = createTheme(themeOpt);
  theme.components = componentsOverride(theme);
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
