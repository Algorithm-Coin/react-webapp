export const mediaQuery = (maxWidth) => `
  @media (max-width: ${maxWidth}px)
`;

export default {
    xxlarge: mediaQuery(1920),
    xlarge: mediaQuery(1500),
    large: mediaQuery(1200),
    medium: mediaQuery(1024),
    small: mediaQuery(767),
    xsmall: mediaQuery(375),
    custom: mediaQuery,
};
