import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import wrapper from '../store/configureStore';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';

const Tama = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Tama</title>
    </Head>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  </>
);

Tama.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Tama);
