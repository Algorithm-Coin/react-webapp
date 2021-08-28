/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

// Colors
import React from 'react';

const black = '#0f0f0f';
const darkblue = '#0d0d2c';
const yellow = '#fdd700';
const green = '#23be87';
const lightgray = '#f2f2f2';
const lightgray2 = '#E7E7E7';
const mediumgray = '#262626';
const red = '#df5252';
const white = '#ffffff';
const offWhite = '#f5f5f5';

// Fonts
const heading = 'Nunito';
const paragraph = 'Nunito';
const menu = 'Nunito';
const logo = 'Gugi';

// Font weights
const light = 300;
const regular = 500;
const bold = 700;

// Global Header settings
const GlobalHeadingSettings = {
    height: '1em',
    spacing: '0em',
    color: white,
    weight: bold,
    marginBottom: '0.66em',
};

type Colors = {
    background: string,
    primary: string,
    secondary: string,
    tertiary: string,
    black: string,
    mediumgray: string,
    lightgray: string,
    lightgray2: string,
    white: string,
    offWhite: string,
};
type Fonts = {
    heading: string,
    paragraph: string,
    menu: string,
    logo: string
};

type FontWeights = {
    light: number,
    regular: number,
    bold: number,
};

type TypographyElement = {
    size?: string,
    height?: string,
    spacing?: string,
    font?: string,
    weight?: number,
    color?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
};
type Body = TypographyElement & {
    height: string,
    spacing: string,
    font: string,
    weight: number,
    color: string,
};
type TextElement = TypographyElement & {
    spacing: string,
    font: string,
    weight: number,
    color: string,
    marginBottom: string,
};
type ListItem = TypographyElement & {
    spacing: string,
    font: string,
    weight: number,
    color: string,
    marginTop: string,
    marginBottom: string,
};
type UnorderedList = TypographyElement & {
    marginTop: string,
    marginBottom: string,
    marginLeft: string,
    marginRight: string,
};
type HTMLElement = TypographyElement & {
    size: string,
    height: string,
    spacing: string,
    font: string,
    weight: number,
    color: string,
};
type Introduction = HTMLElement;
type Caption = HTMLElement;
type Subtitle = HTMLElement;
type Button = HTMLElement;
type MenuItem = HTMLElement;
type Form = HTMLElement;
export type Typography = {
    body: Body,
    h1: TextElement,
    h2: TextElement,
    h3: TextElement,
    h4: TextElement,
    h5: TextElement,
    h6: TextElement,
    p: TextElement,
    li: ListItem,
    ul: UnorderedList,
    introduction: Introduction,
    caption: Caption,
    subtitle: Subtitle,
    button: Button,
    menuitem: MenuItem,
    form: Form,
};
type Breakpoints = {
    xsmall: string,
    small: string,
    medium: string,
    large: string,
    xlarge: string,
    xxlarge?: string,
};
interface Algorithm {
    colors: Colors;
    fonts: Fonts;
    fontWeights: FontWeights;
    typography: Typography;
    breakpoint: Breakpoints;
    containerWidth: Breakpoints;
    breakpointMobileMenu: string;
    mediaQueryMin: Breakpoints;
}
const breakpoints: Breakpoints = {
    xsmall: '45em',
    small: '64em',
    medium: '85.375em',
    large: '120em',
    xlarge: '160em',
    xxlarge: '200em',
};
// Algorithm theme
const Algorithm: Algorithm = {
    colors: {
        background: darkblue,
        primary: yellow,
        secondary: mediumgray,
        tertiary: red,
        black,
        mediumgray,
        lightgray,
        lightgray2,
        white,
        offWhite,
    },
    fonts: {
        heading,
        paragraph,
        menu,
        logo
    },
    fontWeights: {
        light,
        regular,
        bold,
    },
    typography: {
        body: {
            height: '1em',
            spacing: '0.0em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        h1: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h2: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h3: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h4: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h5: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            height: '1.33em',
            weight: regular,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h6: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            height: '1.1em',
            weight: regular,
            color: GlobalHeadingSettings.color,
            marginBottom: '0.33em',
        },
        p: {
            spacing: '0.015em',
            height: '1.33em',
            font: paragraph,
            weight: regular,
            color: lightgray2,
            marginBottom: '1.33em',
        },
        li: {
            spacing: '0em',
            font: paragraph,
            weight: regular,
            color: white,
            marginTop: '1em',
            marginBottom: '1.33em',
        },
        ul: {
            marginTop: '1.33em',
            marginBottom: '1em',
            marginLeft: '1em',
            marginRight: '1.66m',
        },
        introduction: {
            size: '1.22em',
            height: '1.44em',
            spacing: '0.01em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        caption: {
            size: '0.95rem',
            height: '1.48em',
            spacing: '0em',
            font: menu,
            weight: light,
            color: lightgray2,
        },
        subtitle: {
            size: '0.85rem',
            height: '1.2em',
            spacing: '0.35em',
            font: paragraph,
            weight: bold,
            color: green,
        },
        button: {
            size: '1rem',
            height: '1.2em',
            spacing: 'normal',
            font: paragraph,
            weight: regular,
            color: white,
        },
        menuitem: {
            size: '1.125rem',
            height: '1.2em',
            spacing: '0.05em',
            font: menu,
            weight: regular,
            color: lightgray,
        },
        form: {
            size: '2.4rem',
            height: '2.7em',
            spacing: 'normal',
            font: paragraph,
            weight: regular,
            color: white,
        },
    },
    breakpointMobileMenu: '68rem',
    breakpoint: breakpoints,
    containerWidth: {
        xsmall: '2vw',
        small: '4vw',
        medium: '8vw',
        large: '11vw',
        xlarge: '15vw',
    },
    mediaQueryMin: {
        xsmall: `min-width: ${breakpoints.xsmall}`,
        small: `min-width: ${breakpoints.small}`,
        medium: `min-width: ${breakpoints.medium}`,
        large: `min-width: ${breakpoints.large}`,
        xlarge: `min-width: ${breakpoints.xlarge}`,
        xxlarge: `-webkit-min-device-pixel-ratio: 2) and
            (min-resolution: 192dpi) and
            (min-width: ${breakpoints.xxlarge}`,
    },
};

const theme = Algorithm;
export default theme;
