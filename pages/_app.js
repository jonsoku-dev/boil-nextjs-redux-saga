import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import wrapper from '../store/configureStore';

const Tama = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Tama</title>
    </Head>
    <Component />
  </>
);

Tama.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Tama);
