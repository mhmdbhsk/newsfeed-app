import { Global } from '@emotion/react';
const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHSeH.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    `}
  />
);

export default Fonts;
