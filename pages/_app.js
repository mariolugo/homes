import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../config/theme';
import Proptypes from 'prop-types';

import Head from 'next/head';
import { GOOGLE_MAPS_API_URL } from '../src/constants';

const GlobalStyle = createGlobalStyle`
 

  @font-face {
    font-family: 'Open Sans';
    src: url("/fonts/Open_Sans/OpenSans-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans Bold';
    src: url("/fonts/Open_Sans/OpenSans-Bold.ttf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  

   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(249, 249, 249); 
    font-family: 'Open Sans', sans-serif;
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script type="text/javascript" src={GOOGLE_MAPS_API_URL} />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: Proptypes.func.isRequired,
  pageProps: Proptypes.object.isRequired,
};

export default App;
