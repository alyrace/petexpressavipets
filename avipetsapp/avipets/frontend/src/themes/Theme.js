import React from 'react';
import {ThemeProvider } from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: { light: '#289dfb', main: '#066375', dark: '#024982'},
        secondary: {light: '#fc7c7c', main: '#e25822', dark: '#a65a6b'}
    }
});

const Theme = (props) => {
   const {children} = props;
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const withTheme = (Component) => {
    return (props) => {
        return (
            <Theme>
                <Component {...props} />
            </Theme>
        );
    };
};



