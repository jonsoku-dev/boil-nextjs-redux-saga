import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const Home = (props) => (
  <Wrapper>
    this is Home
  </Wrapper>
);

Home.propTypes = {

};

export default Home;
